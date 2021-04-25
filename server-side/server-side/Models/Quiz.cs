using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string QuizName { get; set; }        
        public string QuizDescription { get; set; }        
        public int CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Courses Courses { get; set; }
        public virtual List<QuizQuestions> QuizQuestions { get; set; }

    }
}
