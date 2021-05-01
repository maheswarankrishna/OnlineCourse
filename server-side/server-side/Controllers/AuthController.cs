using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server_side.Dtos;
using server_side.Repository.Interface;

namespace server_side.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    { 

        private readonly IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRegisterDto userRegister)
        {
            if (await _authRepository.IsUserExist(userRegister.Email.ToLower()))
                ModelState.AddModelError("Email", "Email is already registered");

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var users = _authRepository.Register(userRegister);

            return Ok(userRegister);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginDto userLogin)
        {
            var users =await _authRepository.Login(userLogin.Email.ToLower(), userLogin.Password);
            if (users == null)
            {
                return Unauthorized();                
            }
            return Ok(users);
        }

        [HttpGet("GetAllTeachers")]
        public async Task<IActionResult> GetAllTeachers()
        {
            var users = await _authRepository.GetAllTeachers();
            
            return Ok(users);
        }

        [HttpGet("GetAllUserTypes")]
        public async Task<IActionResult> GetAllUserTypes()
        {
            var users = await _authRepository.GetUserTypes();

            return Ok(users);
        }

        [HttpPut("ToggleTeacherStatus")]
        public async Task<IActionResult> ToggleTeacherStatus(TeacherToggleDto teacherApproval)
        {
            var users = await _authRepository.ToggleTeacherStatus(teacherApproval);

            return Ok(users);
        }
    }
}
