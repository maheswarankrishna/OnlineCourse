using server_side.Dtos;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public interface ICourseRepository
    {
        Task<CoursesDto> GetCoursesById(int Id);
        Task<List<CourseModel>> GetAllCourses();
        Task<Courses> UpdateCourse(Courses course);
        Task<Courses> CreateCourse(CourseCreateModel course);
        Task<bool> CourseName(CourseCreateModel course);
        Task<List<CoursesForUsersDto>> GetCourseForTeacher(int Id);
        Task<List<CoursesForUsersDto>> GetCourseForStudent(int Id);
        Task<RegisterCourseDto> RegisterForCourseStudent(RegisterCourseDto registerCourseDto);
        Task<bool> CheckTeacherApproved(int Id);
        Task<List<CoursesForUsersDto>> GetCoursesByCategoryId(int Id);

    }
}
