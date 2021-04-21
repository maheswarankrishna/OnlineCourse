using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Models;
using server_side.Repository.Interface;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseVideosController : ControllerBase
    {
        private readonly ICourseVideosRepository _courseVideosRepository;
        public CourseVideosController(ICourseVideosRepository courseVideosRepository)
        {
            _courseVideosRepository = courseVideosRepository;
        }
        [HttpPost]
        public async Task<IActionResult> UploadVideos([FromForm] Videos videoModel)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", videoModel.FileName);

                using(Stream stream = new FileStream(path, FileMode.Create))
                {
                    videoModel.FormFiles.CopyTo(stream);
                }

                await _courseVideosRepository.UploadVideoForCourse(videoModel, path);

                return Ok();
            }

            catch
            {
                return Ok();
            }
            
        }
    }
}
