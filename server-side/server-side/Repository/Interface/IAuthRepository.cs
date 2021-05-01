using server_side.Dtos;
using server_side.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server_side.Repository.Interface
{
    public interface IAuthRepository
    {
        Task<User> Register(UserRegisterDto user);
        Task<User> Login(string email, string password);
        Task<bool> IsUserExist(string email);
        Task<List<TeacherApprovalDto>> GetAllTeachers();
        Task<TeacherToggleDto> ToggleTeacherStatus(TeacherToggleDto TeacherApproval);
        Task<List<UserTypes>> GetUserTypes();

    }
}
