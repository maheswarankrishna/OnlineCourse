using Microsoft.EntityFrameworkCore;
using server_side.Models;
using server_side.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository
{
    public class CourseVideosRepository : ICourseVideosRepository
    {
        private readonly GetCertificateDbContext _dbContext;
        public CourseVideosRepository(GetCertificateDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> GetCourseName(int id)
        {
            var courses = _dbContext.Courses.FirstOrDefault(p => p.Id == id);
            var courseName = courses.CourseName;

            return courseName;
        }

        public async Task<CourseVideos> GetCoursesById(int Id)
        {
            var course = _dbContext.CourseVideos.Include(p => p.Courses).FirstOrDefault(p => p.Id == Id);

            var courseVideos = new CourseVideos()
            {
                Id = course.Id,
                FileName = course.FileName,
                FilePath = course.FilePath,
                Courses = new Courses()
                {
                    CourseName = course.Courses.CourseName
                }
            };

            return courseVideos;
        }

        public async Task<CourseVideos> UploadVideoForCourse(Videos videos, string path)
        {
            var CourseVideos = new CourseVideos()
            {
                FileName = videos.FileName,
                FilePath = path,
                VideoDescription = videos.Description,
                CourseId = videos.CourseId
            };

            _dbContext.CourseVideos.Add(CourseVideos);
            _dbContext.SaveChanges();

            return CourseVideos;
        }
    }
}
