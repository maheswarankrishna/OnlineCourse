using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class Courses
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public int CourseTypeId { get; set; }
        [ForeignKey("CourseTypeId")]
        public CourseType CourseType { get; set; }
        public virtual TeacherProfile Teacher { get; set; }
        public virtual List<StudentProfile> Student { get; set; }
        public virtual List<CourseVideos> Videos { get; set; }
        public virtual List<Quiz> Quiz { get; set; }

    }
}
