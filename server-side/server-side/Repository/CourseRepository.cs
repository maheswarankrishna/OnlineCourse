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
            var course = new Courses()
            {
                CourseName = courseCreateModel.CourseName,
                Description = courseCreateModel.Description,
                CourseTypeId = courseCreateModel.CourseType,
                Teacher = new TeacherProfile
                {
                    TeacherId = courseCreateModel.TeacherProfile.TeacherId,
                    CourseId = courseCreateModel.TeacherProfile.CourseId
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

        public async Task<CoursesDto> GetCoursesById(int Id)
        {
            var result = await  _dbContext.Courses.Include(e => e.Videos).Include(e => e.Quiz).FirstOrDefaultAsync(e => e.Id == Id);
            var courses = _mapper.Map<CoursesDto>(result);
            //var resultCourses = _dbContext.CourseVideos.GetAll
           CoursesDto personViews =
                    _mapper.Map<Courses, CoursesDto>(result);           

            return personViews;
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
