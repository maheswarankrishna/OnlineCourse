using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class StudentProfile
    {
        public int Id { get; set; }        
        public int StudentId { get; set; }
        [ForeignKey("StudentId")]
        public User User { get; set; }
        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Courses Courses { get; set; }

    }

}
