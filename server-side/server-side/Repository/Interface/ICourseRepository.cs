using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public interface ICourseRepository
    {
        Task<Courses> GetCoursesById(int Id);
        Task<List<Courses>> GetAllCourses();
        Task<Courses> UpdateCourse(Courses course);
        Task<Courses> CreateCourse(Courses course);
    }
}
