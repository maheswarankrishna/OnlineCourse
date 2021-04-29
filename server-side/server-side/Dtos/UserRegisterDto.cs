using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using static server_side.Utility.BaseEnums;

namespace server_side.Dtos
{
    public class UserRegisterDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public UserType UserType { get; set; }
    }
}
