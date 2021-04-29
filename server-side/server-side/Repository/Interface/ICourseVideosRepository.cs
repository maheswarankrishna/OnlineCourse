using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository.Interface
{
    public interface ICourseVideosRepository
    {
        Task<CourseVideos> UploadVideoForCourse(Videos videos, string path);
        Task<string> GetCourseName(int id);
        Task<CourseVideos> GetCoursesById(int Id);
    }
}
