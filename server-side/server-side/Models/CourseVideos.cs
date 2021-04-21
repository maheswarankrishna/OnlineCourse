using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class CourseVideos
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        //public virtual Courses CourseId { get; set; }
    }
}
