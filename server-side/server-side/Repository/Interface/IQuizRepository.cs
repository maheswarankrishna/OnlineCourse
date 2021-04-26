using server_side.Dtos;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository.Interface
{
    public interface IQuizRepository
    {
        Task<QuizDto> GetQuizById(int Id);
        Task<List<Quiz>> GetAllQuizzes();
        Task<Quiz> UpdateQuiz(Courses course);
        Task<QuizDto> CreateQuiz(QuizDto quiz);
    }
}
