using AutoMapper;
using Microsoft.EntityFrameworkCore;
using server_side.Dtos;
using server_side.Models;
using server_side.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static server_side.Utility.BaseEnums;

namespace server_side.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private readonly GetCertificateDbContext _dbContext;
        private readonly IMapper _mapper;

        public AuthRepository(GetCertificateDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<bool> IsUserExist(string email)
        {
            var user =  await _dbContext.Users.AnyAsync(x => x.Email == email);

            if (user)
                return true;

            return false;
        }

        public async Task<User> Login(string email, string password)
        {
            var user =  _dbContext.Users
                                .Where(u => u.Email == email)
                                .FirstOrDefault();

            if (user == null)
                return null;

            if (!IsCorrectPassword(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        public async Task<User> Register(UserRegisterDto userResgister)
        {
            byte[] passwordHash, passwordSalt;

            var user = new User
            {       
                Email = userResgister.Email,
                UserType = userResgister.UserType,
                FirstName =userResgister.FirstName,
                LastName = userResgister.LastName                
                                
            };

            if(user.UserType != Utility.BaseEnums.UserType.Teacher)
            {
                user.Status = Utility.BaseEnums.UserStatus.Approved;
            }
            else
            {
                user.Status = Utility.BaseEnums.UserStatus.Pending;
            }

            CreatePasswordHash(userResgister.Password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _dbContext.Users.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            return user;
        }

        private bool IsCorrectPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i])
                        return false;
                }
            }

            return true;
        }

        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<List<TeacherApprovalDto>> GetAllTeachers()
        {
            var teachers = _dbContext.Users.Where(p => p.UserType == Utility.BaseEnums.UserType.Teacher && p.Status == Utility.BaseEnums.UserStatus.Pending).ToList();

            var teacherApproval = new List<TeacherApprovalDto>();

            teachers.ForEach(item =>
            {
                teacherApproval.Add(new TeacherApprovalDto
                {
                    Id = item.Id,
                    Email = item.Email,
                    FirstName = item.FirstName,
                    LastName = item.LastName,
                    Status = item.Status
                });
            });

            return teacherApproval;
        }

        public async Task<TeacherToggleDto> ToggleTeacherStatus(TeacherToggleDto teacherApproval)
        {
            var teacherStatus = _dbContext.Users.FirstOrDefault(p => p.Id == teacherApproval.Id);

            
            //if(teacherApproval.Status == Utility.BaseEnums.UserStatus.Rejected)
            //{
            //    teacherStatus.Status = teacherApproval.Status;
            //    await _dbContext.SaveChangesAsync();
            //}

            teacherStatus.Status = teacherApproval.Status;
            await _dbContext.SaveChangesAsync();

            return teacherApproval;
        }

        public async Task<List<UserTypes>> GetUserTypes()
        {
            var userTypes = new List<UserTypes>();
            var i = 1;
            foreach (UserType item in Enum.GetValues(typeof(UserType)))
            {
                
                userTypes.Add(new UserTypes
                {
                    Id = i,
                    UserType = item.ToString()                    
                });
                i++;
            }

            return userTypes;


        }
    }
}
