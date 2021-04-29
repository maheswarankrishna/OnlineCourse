using Microsoft.AspNetCore.Http;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Dtos
{
    public class CourseVideosDto
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string VideoDescription { get; set; }
        public virtual Courses courses { get; set; }
        public int CourseId { get; set; }        

    }
}
