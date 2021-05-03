using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Dtos;
using server_side.Repository.Interface;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseTypeController : ControllerBase
    {
        private readonly ICoursesTypeRepository _coursesTypeRepository;

        public CourseTypeController(ICoursesTypeRepository coursesTypeRepository)
        {
            _coursesTypeRepository = coursesTypeRepository;
        }
        // GET: api/<Courses1Controller>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var couresTypes = await _coursesTypeRepository.GetAllCourseTypes();
            return Ok(couresTypes);
        }

        // GET api/<Courses1Controller>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var couresTypes = await _coursesTypeRepository.GetCourseTypeById(id);
            return Ok(couresTypes);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCourseType(CourseTypeDto courseTypeDto)
        {
            var courses = await _coursesTypeRepository.CreateCourseType(courseTypeDto);

            return Ok(courses);
        }
    }
}
