using AutoMapper;
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
        private readonly IMapper _mapper;
        public CourseRepository(GetCertificateDbContext dbContext,  IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;

        }

        public async Task<bool> CheckTeacherApproved(int Id)
        {
            var teacher = _dbContext.Users.FirstOrDefault(p => p.Id == Id);

            if (teacher.Status != Utility.BaseEnums.UserStatus.Approved)
            {
                return false;
            }
            return true;
        }

        public async Task<bool> CourseName(CourseCreateModel course)
        {
            var courses = _dbContext.Courses.Select(p => p.CourseName).ToList();
           // var courseName = if(p => courses.Contains(course.CourseName)          
             if (courses.Contains(course.CourseName))
             {
                return true;
            }
            else
            {
                return false;
            }

        }

        public async Task<Courses> CreateCourse(CourseCreateModel courseCreateModel)
        {           

            //if(courseCreateModel.TeacherProfile.TeacherId )

            var course = new Courses()
            {
                CourseName = courseCreateModel.CourseName,
                Description = courseCreateModel.Description,
                CourseTypeId = courseCreateModel.CourseType,
                Teacher = new TeacherProfile
                {
                    TeacherId = courseCreateModel.TeacherId,                   
                }
                
            };

            var courses = await _dbContext.Courses.AddAsync(course);
            _dbContext.SaveChanges();
            return course;
        }

        public async Task<List<CourseModel>> GetAllCourses()
        {
            var result = await _dbContext.Courses.Include(e => e.Videos).Include(e => e.Quiz).Include(e => e.CourseType).ToListAsync();
            //var courses = _mapper.Map<CoursesDto>(result);
            List<CoursesDto> personViews = _mapper.Map<List<Courses>, List<CoursesDto>>(result);
            var courseModel = new List<CourseModel>();

            personViews.ForEach(item =>
            {
                courseModel.Add(new CourseModel
                {
                    Id = item.Id,
                    CourseName = item.CourseName,
                    Description = item.Description,
                    CourseType = item.CourseType.Name,
                    Videos = item.Videos.Count(),
                    Quizzes = item.Quiz.Count()
                });
            });
            
            return courseModel;
        }

        public async Task<List<CoursesForUsersDto>> GetCourseForStudent(int Id)
        {
            var student = _dbContext.Users.FirstOrDefault(p => p.Id == Id);

            if(student.UserType != Utility.BaseEnums.UserType.Student)
            {
                return null;
            }

            var StudentCourses = _dbContext.StudentProfile.Where(p => p.StudentId == Id).Select(p => p.CourseId).ToList();

            var result = await _dbContext.Courses.Include(e => e.Videos).Include(e => e.Quiz).Include(e => e.CourseType).ToListAsync();

            var courses = result.Where(p => StudentCourses.Contains(p.Id)).ToList();

            List<CoursesForUsersDto> courseDto = _mapper.Map<List<Courses>, List<CoursesForUsersDto>>(courses);

            return courseDto;
        }

        public async Task<List<CoursesForUsersDto>> GetCourseForTeacher(int id)
        {
            var teacherCourses = _dbContext.TeacherProfile.Where(p => p.TeacherId == id).Select(p => p.CourseId).ToList();

            var result = await _dbContext.Courses.Include(e => e.Videos).Include(e => e.Quiz).Include(e => e.CourseType).ToListAsync();

            var courses = result.Where(p => teacherCourses.Contains(p.Id)).ToList();

            List<CoursesForUsersDto> courseDto = _mapper.Map<List<Courses>, List<CoursesForUsersDto>>(courses);           

            return courseDto;
        }

        public async Task<List<CoursesForUsersDto>> GetCoursesByCategoryId(int Id)
        {
            var result =  _dbContext.Courses.Where(e => e.CourseTypeId == Id).ToList();
           // var courses = _mapper.Map<CoursesDto>(result);
            List<CoursesForUsersDto> courseDto = _mapper.Map<List<Courses>, List<CoursesForUsersDto>>(result);

            return courseDto;
        }

        public async Task<CoursesDto> GetCoursesById(int Id)
        {
            var result = await  _dbContext.Courses.Include(e => e.Videos).Include(e => e.Quiz).FirstOrDefaultAsync(e => e.Id == Id);
            var courses = _mapper.Map<CoursesDto>(result);
            //var resultCourses = _dbContext.CourseVideos.GetAll
           CoursesDto personViews =
                    _mapper.Map<Courses, CoursesDto>(result);           

            return personViews;
        }

        public async Task<RegisterCourseDto> RegisterForCourseStudent(RegisterCourseDto registerCourseDto)
        {

            var registerCourseStudent = new StudentProfile()
            {
                StudentId = registerCourseDto.StudentId,
                CourseId = registerCourseDto.CourseId
            };

            var courses = await _dbContext.StudentProfile.AddAsync(registerCourseStudent);
            _dbContext.SaveChanges();            

            return registerCourseDto;

           
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
