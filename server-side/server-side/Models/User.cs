using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static server_side.Utility.BaseEnums;

namespace server_side.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }       
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FirstName { get; set; }        
        public string LastName { get; set; }
        public UserType UserType { get; set; }
        public UserStatus Status { get; set; }
    }
}
