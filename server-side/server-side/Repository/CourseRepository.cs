using Microsoft.EntityFrameworkCore;
using server_side.Dtos;
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
            var courses = await _dbContext.Courses.AddAsync(course);
            _dbContext.SaveChanges();
            return course;
        }

        public async Task<List<Courses>> GetAllCourses()
        {
            var result = await _dbContext.Courses.ToListAsync();

            return result;
        }

        public async Task<List<Courses>> GetCoursesById(int Id)
        {
            var result =  _dbContext.Courses.Include(e => e.Videos).Where(e => e.Id == Id).AsQueryable();
            //var resultCourses = _dbContext.CourseVideos.GetAll
            var results = await result.ToListAsync();

            //var courseVideo = new CourseVideosDto();

            //var coursesDto = new CoursesDto()
            //{
            //    Id = result.Id,
            //    CourseName = result.CourseName,
            //    Description = result.Description,
            //    CourseTypeId = result.CourseTypeId,
            //    courseVideosDto = new List<CourseVideosDto>()
            //    {
            //       courseVideosDto.
            //    }
            //}
            //var res = _dbContext.Courses
            //.Include("Employee.Employee_Car")
            return results;
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
