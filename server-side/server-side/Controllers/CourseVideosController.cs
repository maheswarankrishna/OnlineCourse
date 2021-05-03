using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Models;
using server_side.Repository.Interface;
using Microsoft.Extensions.Configuration;
using Amazon.Runtime;
using Amazon.S3.Transfer;
using Microsoft.Extensions.Options;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseVideosController : ControllerBase
    {
        private readonly ICourseVideosRepository _courseVideosRepository;
        private readonly IAmazonS3 _amazonS3;
        
        public CourseVideosController(ICourseVideosRepository courseVideosRepository, IAmazonS3 amazonS3)
        {
            _courseVideosRepository = courseVideosRepository;
            _amazonS3 = amazonS3;            
        }
        [HttpPost]
        public async Task<IActionResult> UploadVideos([FromForm] Videos videoModel)
        {
            try
            {              
                                       

                //var fileTransferUtility = new TransferUtility(client);
                //await fileTransferUtility.UploadAsync(uploadRequest);

                var courseName =await _courseVideosRepository.GetCourseName(videoModel.CourseId);                                
                var bucketName = "onlinecourseswithvideos";

                //string path = Path.Combine("https://onlinecourseswithvideos.s3.ap-south-1.amazonaws.com/", courseName, videoModel.FileName);
                          

                await using var newMemoryStream = new MemoryStream();
                videoModel.FormFiles.CopyTo(newMemoryStream);


                string prefix = courseName;
                PutObjectRequest putobjectRequest = new PutObjectRequest();
                putobjectRequest.BucketName = bucketName;
                putobjectRequest.Key = (prefix.TrimEnd('/') + "/" + videoModel.FileName.TrimEnd('/')).TrimStart('/');
                putobjectRequest.InputStream = newMemoryStream;
                var response = await _amazonS3.PutObjectAsync(putobjectRequest);
                
                var res = response.HttpStatusCode;

                string path = Path.Combine("https://onlinecourseswithvideos.s3.ap-south-1.amazonaws.com/", courseName, videoModel.FileName);

                await _courseVideosRepository.UploadVideoForCourse(videoModel, path);

                return Ok();
            }

            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
            
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVideoById(int id)
        {
            var bucketName = "onlinecourseswithvideos";
            var course = await _courseVideosRepository.GetCoursesById(id);            
            return Ok(course);
        }


    }
}
