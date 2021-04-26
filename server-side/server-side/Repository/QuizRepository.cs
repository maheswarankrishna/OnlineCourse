using Microsoft.EntityFrameworkCore;
using server_side.Dtos;
using server_side.Models;
using server_side.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;

namespace server_side.Repository
{
    public class QuizRepository : IQuizRepository
    {
        private readonly GetCertificateDbContext _dbContext;
        private readonly IMapper _mapper;
        public QuizRepository(GetCertificateDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        public async Task<QuizDto> CreateQuiz(QuizDto quizDto)
        {
            var quiz = _mapper.Map<Quiz>(quizDto);
            var quizzes = await _dbContext.Quizzes.AddAsync(quiz);
            _dbContext.SaveChanges();
            //quizzes.MapTo<AgentUserModel>()
            var quizResult = _mapper.Map<QuizDto>(quiz);
            return quizResult;
        }

        public async Task<List<Quiz>> GetAllQuizzes()
        {
            var result = await _dbContext.Quizzes.ToListAsync();
            return result;
        }

        public async Task<QuizDto> GetQuizById(int Id)
        {
            var result =  _dbContext.Quizzes.Include(e => e.QuizQuestions).FirstOrDefault(e => e.Id == Id);
            var quizzDto = _mapper.Map<QuizDto>(result);
            return quizzDto;
        }

        public Task<Quiz> UpdateQuiz(Courses course)
        {
            throw new NotImplementedException();
        }
    }
}
