using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class TeacherProfile
    {
        public int Id { get; set; }
        public int TeacherId { get; set; }
        [ForeignKey("TeacherId")]
        public User User { get; set; }
        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Courses Courses { get; set; }
    }
}
