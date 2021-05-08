using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Dtos
{
    public class QuizAddDto
    {
        public int Id { get; set; }
        public string QuizName { get; set; }
        public string QuizDescription { get; set; }
        public int CourseId { get; set; }
    }
}
