using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Dtos
{
    public class CourseModel
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public string CourseType { get; set; }
        public int Videos { get; set; }
        public int Quizzes { get; set; }
    }
}
