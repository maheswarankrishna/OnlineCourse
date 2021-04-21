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

        public async Task<CourseVideos> UploadVideoForCourse(Videos videos, string path)
        {
            var CourseVideos = new CourseVideos()
            {
                FileName = videos.FileName,
                FilePath = path
            };

            _dbContext.CourseVideos.Add(CourseVideos);
            _dbContext.SaveChanges();

            return CourseVideos;
        }
    }
}
