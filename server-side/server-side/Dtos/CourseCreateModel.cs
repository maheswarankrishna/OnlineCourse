using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Dtos
{
    public class CourseCreateModel
    {       
        public string CourseName { get; set; }
        public string Description { get; set; }
        public int CourseType { get; set; }
        public int TeacherId { get; set; }
    }
}
