using server_side.Dtos;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository.Interface
{
    public interface ICoursesTypeRepository
    {
        Task<List<CourseType>> GetAllCourseTypes();
        Task<CoursListWithTypes> GetCourseTypeById(int id);
        Task<CourseTypeDto> CreateCourseType(CourseTypeDto course);
    }
}
