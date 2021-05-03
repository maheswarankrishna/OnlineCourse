using Microsoft.EntityFrameworkCore;
using server_side.Dtos;
using server_side.Models;
using server_side.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public class CourseTypeRepository : ICoursesTypeRepository
    {
        private static GetCertificateDbContext _dbContext;

        public CourseTypeRepository(GetCertificateDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<CourseTypeDto> CreateCourseType(CourseTypeDto course)
        {
            var courseType = new CourseType()
            {
                Name = course.Name,
                Subtitle = course.Subtitle,
                Description = course.Description
            };

            var cou = await _dbContext.CourseTypes.AddAsync(courseType);
            _dbContext.SaveChanges();

            return course;
        }

        public async Task<List<CourseType>> GetAllCourseTypes()
        {
            var courseTypes = await _dbContext.CourseTypes.ToListAsync();
            return courseTypes;
        }

        public async Task<CoursListWithTypes> GetCourseTypeById(int id)
        {
            var result = await _dbContext.CourseTypes.FirstOrDefaultAsync(e => e.Id == id);
            var courseList = _dbContext.Courses.Where(e => e.CourseTypeId == id);

            //CoursListWithTypes coursListWithTypes1 = coursListWithTypes;
            CoursListWithTypes coursListWithTypes = new CoursListWithTypes()
            {
                Name = result.Name,
                Subtitle = result.Subtitle,
                Description = result.Description,
                Courses = courseList.ToList()            

            };

            return coursListWithTypes;
        }
    }
}
