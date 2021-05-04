using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Dtos;
using server_side.Models;
using server_side.Repository;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository _coursesRepository;
        private readonly IAmazonS3 _amazonS3;

        public CoursesController(ICourseRepository coursesRepository, IAmazonS3 amazonS3)
        {
            _coursesRepository = coursesRepository;
            _amazonS3 = amazonS3;
        }
        // GET: api/<CoursesController>
        [HttpGet]
        public async Task<IActionResult> GetAllCourses()
        {
            var coures = await _coursesRepository.GetAllCourses();

            return Ok(coures);
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourseById(int id)
        {
            var course = await _coursesRepository.GetCoursesById(id);
            return Ok(course);
        }

        [HttpGet("courseByCategoryId/{id}")]
        public async Task<IActionResult> GetCourseByCategoryId(int id)
        {
            var course = await _coursesRepository.GetCoursesByCategoryId(id);
            return Ok(course);
        }

        // POST api/<CoursesController>
        [HttpPost]
        public async Task<IActionResult> CreateCourse([FromBody] CourseCreateModel courses)
        {

            var teacher = await _coursesRepository.CheckTeacherApproved(courses.TeacherId);
            if (!teacher)
            {
                return BadRequest("Teacher not approved to create course");
            }            

            var courseName = await _coursesRepository.CourseName(courses);
            if (courseName)
            {
                return BadRequest("Course name already exists. Please enter a unique course name");
            }

            string prefix = "";
            PutObjectRequest putobjectRequest = new PutObjectRequest();
            putobjectRequest.BucketName = "onlinecourseswithvideos";
            putobjectRequest.Key = (prefix.TrimEnd('/') + "/" + courses.CourseName.TrimEnd('/') + "/").TrimStart('/');
            //putobjectRequest.InputStream = 
            var response = await _amazonS3.PutObjectAsync(putobjectRequest);
            var res = response.HttpStatusCode;
            var result = await _coursesRepository.CreateCourse(courses);
            return Ok(result);
        }

        [HttpGet("getCoursesForTeacher/{id}")]
        public async Task<IActionResult> GetCoursesForTeacher(int Id)
        {
            var courses =await _coursesRepository.GetCourseForTeacher(Id);

            return Ok(courses);
        }

        [HttpGet("getCoursesForStudent/{id}")]
        public async Task<IActionResult> GetCoursesForStudent(int Id)
        {
            var courses = await _coursesRepository.GetCourseForStudent(Id);

            if(courses == null)
            {
                return BadRequest("The Id does not match");
            }

            return Ok(courses);
        }

        [HttpPost("registerCourseForStudent")]
        public async Task<IActionResult> registerCourseForStudent(RegisterCourseDto registerCourseDto)
        {
            var courses = await _coursesRepository.RegisterForCourseStudent(registerCourseDto);

            return Ok(courses);
        }

        // PUT api/<CoursesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Courses courses)
        {
            var result = await _coursesRepository.UpdateCourse(courses);
            return Ok(result);
        }        
    }
}
