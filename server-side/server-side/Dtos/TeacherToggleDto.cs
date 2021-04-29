using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static server_side.Utility.BaseEnums;

namespace server_side.Dtos
{
    public class TeacherToggleDto
    {
        public int Id { get; set; }
        public UserStatus Status { get; set; }
    }
}
