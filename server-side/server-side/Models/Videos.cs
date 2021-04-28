using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Models
{
    public class Videos
    {        
        public string FileName { get; set; }
        public IFormFile FormFiles { get; set; }
        public string Description { get; set; }
        public int CourseId { get; set; }

    }
}
