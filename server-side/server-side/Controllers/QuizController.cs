using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Dtos;
using server_side.Models;
using server_side.Repository;
using server_side.Repository.Interface;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly IQuizRepository _quizRepository;
        public QuizController(IQuizRepository quizRepository)
        {
            _quizRepository = quizRepository;
        }

        //GET: api/<QuizController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var quizzes = await _quizRepository.GetAllQuizzes();
            return Ok(quizzes);
        }

        // GET api/<QuizController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var quiz = await _quizRepository.GetQuizById(id);
            return Ok(quiz);
        }

        //POST api/<QuizController>
        [HttpPost]
        public async Task<IActionResult> CreateQuiz([FromBody] QuizDto quizz)
        {
            var result = await _quizRepository.CreateQuiz(quizz);
            return Ok(result);
        }

        // PUT api/<QuizController>/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Put(int id, [FromBody] Courses courses)
        //{
        //    var result = await _coursesRepository.UpdateCourse(courses);
        //    return Ok(result);
        //}

    }
}
