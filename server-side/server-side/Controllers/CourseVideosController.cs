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

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseVideosController : ControllerBase
    {
        private readonly ICourseVideosRepository _courseVideosRepository;
        private readonly IAmazonS3 _amazonS3;
        private readonly IConfiguration _configuration;
        public CourseVideosController(ICourseVideosRepository courseVideosRepository, IAmazonS3 amazonS3, IConfiguration configuration)
        {
            _courseVideosRepository = courseVideosRepository;
            _amazonS3 = amazonS3;
            _configuration = configuration;
        }
        [HttpPost]
        public async Task<IActionResult> UploadVideos([FromForm] Videos videoModel)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", videoModel.FileName);

                //using(Stream stream = new FileStream(path, FileMode.Create))
                //{
                //    videoModel.FormFiles.CopyTo(stream);
                //}
                //FileInfo fileInfo = new FileInfo(videoModel.FileName);
                //FileStream fileStream = fileInfo.OpenRead();                
                //string prefix = "Myfirstcourse";

                //PutObjectRequest putobjectRequest = new PutObjectRequest();
                //putobjectRequest.BucketName = "onlinecourseswithvideos";
                //putobjectRequest.Key = (prefix.TrimEnd('/') + "/" +  videoModel.FileName).TrimStart('/');
                ////putobjectRequest.Key = (prefix.TrimEnd('/') + "/" + videoModel.FileName.TrimEnd('/')).TrimStart('/');
                //putobjectRequest.InputStream = videoModel.FormFiles;
                ////putobjectRequest.CannedACL = 
                //var response = await _amazonS3.PutObjectAsync(putobjectRequest);
                //var res = response.HttpStatusCode;

                //var accessId = _configuration["AWSBucketConfig: AccesskeyID"];                
                //var secretKey = _configuration["AWSBucketConfig: SecretAccessKey"];
                //var accessId = "AKIAQJJINF765X7UTRXB";
                //var secretKey = "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";

                ////var credentials = new BasicAWSCredentials(_configuration["AWSBucketConfig: AccesskeyID"], _configuration["AWSBucketConfig: SecretAccessKey"]);
                //var credentials = new BasicAWSCredentials(accessId, secretKey);
                //var config = new AmazonS3Config
                //{
                //    RegionEndpoint = Amazon.RegionEndpoint.APSouth1
                //};
                //using var client = new AmazonS3Client(credentials, config);
                ////var name = configuration["ClearBank:APIEndPoint"]
                //// ap - south - 1

                //await using var newMemoryStream = new MemoryStream();
                //videoModel.FormFiles.CopyTo(newMemoryStream);

                //var uploadRequest = new TransferUtilityUploadRequest
                //{
                //    InputStream = newMemoryStream,
                //    Key = videoModel.FileName,
                //    BucketName = "onlinecourseswithvideos",
                //    CannedACL = S3CannedACL.PublicRead
                //};



                //var fileTransferUtility = new TransferUtility(client);
                //await fileTransferUtility.UploadAsync(uploadRequest);

                await using var newMemoryStream = new MemoryStream();
                videoModel.FormFiles.CopyTo(newMemoryStream);


                string prefix = "Myfirstcoursenewcheck";
                PutObjectRequest putobjectRequest = new PutObjectRequest();
                putobjectRequest.BucketName = "onlinecourseswithvideos";
                putobjectRequest.Key = (prefix.TrimEnd('/') + "/" + videoModel.FileName.TrimEnd('/')).TrimStart('/');
                putobjectRequest.InputStream = newMemoryStream;
                var response = await _amazonS3.PutObjectAsync(putobjectRequest);
                var res = response.HttpStatusCode;               


                await _courseVideosRepository.UploadVideoForCourse(videoModel, path);

                return Ok();
            }

            catch (Exception ex)
            {
                return Ok(ex.Message);
            }
            
        }

        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetVideoById(int id)
        //{
        //    var course = await _coursesRepository.GetCoursesById(id);
        //    return Ok(course);
        //}


    }
}
