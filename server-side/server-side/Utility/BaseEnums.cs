using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Utility
{
    public class BaseEnums
    {
        public enum UserType
        {
           // [Description("Teacher")]
            Teacher = 1,
           // [Description("Student")]
            Student,
           // [Description("Admin")]
            Admin
        }

        public enum UserStatus
        {            
            [Description("Approved")]
            Approved = 1,
            [Description("Pending")]
            Pending,
            [Description("Rejected")]
            Rejected
        }

    }
}
