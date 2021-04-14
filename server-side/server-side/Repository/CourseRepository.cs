using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public class CourseRepository:ICourseRepository
    {
        private readonly GetCertificateDbContext _dbContext;
        public CourseRepository(GetCertificateDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Courses> CreateCourse(Courses course)
        {
            var courses = _dbContext.Courses.Add(course);
            _dbContext.SaveChanges();
            return course;
        }

        public async Task<List<Courses>> GetAllCourses()
        {
            var result = _dbContext.Courses.ToList();

            return result;
        }

        public async Task<Courses> GetCoursesById(int Id)
        {
            var result =  _dbContext.Courses.FirstOrDefault(e => e.Id == Id);

            return result;
        }

        public async Task<Courses> UpdateCourse(Courses course)
        {
            var courses = _dbContext.Courses.Attach(course);
            courses.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _dbContext.SaveChanges();
            return course;

        }
    }
}
