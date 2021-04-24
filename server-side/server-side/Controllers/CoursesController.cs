using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Models;
using server_side.Repository;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly ICourseRepository _coursesRepository;

        public CoursesController(ICourseRepository coursesRepository)
        {
            _coursesRepository = coursesRepository;
        }
        // GET: api/<CoursesController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var coures = await _coursesRepository.GetAllCourses();
            return Ok(coures);
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var course = await _coursesRepository.GetCoursesById(id);
            return Ok(course);
        }

        // POST api/<CoursesController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Courses courses)
        {
            var result = await _coursesRepository.CreateCourse(courses);
            return Ok(result);
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
