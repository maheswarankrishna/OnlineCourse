using server_side.Models;
using server_side.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace server_side.Repository
{
    public class CourseTypeRepository : ICoursesTypeRepository
    {
        private static GetCertificateDbContext _dbContext;

        public CourseTypeRepository(GetCertificateDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<CourseType>> GetAllCourseTypes()
        {
            var courseTypes = _dbContext.CourseTypes.ToList();
            return courseTypes;
        }

        public async Task<CoursListWithTypes> GetCourseTypeById(int id)
        {
            var result = _dbContext.CourseTypes.FirstOrDefault(e => e.Id == id);
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
