using cttMove.Models.Db;
using cttMove.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private AuthService authService;

        public AuthController ()
        {
            this.authService = new AuthService();
        }

        [HttpPost("login")]
        public IActionResult login ([FromBody] CttUser userData)
        {
            CttUser loggedUser = authService.login(userData.Email, userData.Pass);

            if (loggedUser == null)
            {
                return BadRequest();
            }
            loggedUser.Pass = ""; //Should improve this using DTOs;
            return Ok(loggedUser);
        }

        [HttpPost("register-email")]
        public IActionResult register ([FromBody] CttUser user)
        {
            bool isEmailFree = authService.registerNewEmail(user.Email, user.Pass);
            
            if (!isEmailFree)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpPost("register-details")]
        public IActionResult registerUserDetails([FromBody] CttUser user)
        {
            authService.regsiterUserDetails(user);
            return Ok(user);
        }
    }
}
