using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Dtos
{
    public class CoursesDto
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public int CourseTypeId { get; set; }
        public List<CourseVideosDto> courseVideosDto { get; set; }

        //public virtual List<CourseVideos> Videos { get; set; }
    }
}
