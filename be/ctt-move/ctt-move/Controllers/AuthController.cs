using cttMove.Models.Db;
using cttMove.Services;
using Microsoft.AspNetCore.Authorization;
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
        public async Task<ActionResult<dynamic>> login ([FromBody] CttUser userData)
        {
            CttUser loggedUser = authService.login(userData.Email, userData.Pass);

            if (loggedUser == null)
            {
                return BadRequest();
            }
                
            var token = TokenService.GenerateToken(loggedUser);

            var userDTO = new //DTO Should be a proper DTO class...
            {
                Email = loggedUser.Email,
                FullName = loggedUser.FullName,
                BirthDate = loggedUser.BirthDate,
                Nif = loggedUser.Nif,
                CcNumber = loggedUser.CcNumber,
                Locality = loggedUser.Locality,
                Iban = loggedUser.Iban,
                Phone = loggedUser.Phone
            };

            return Ok( new
            {
                user = userDTO,
                token = token
            });
        }

        [HttpPost("verify-email")]
        public IActionResult register ([FromBody] string email)
        {
            bool isEmailFree = authService.isEmailFree(email);
            
            if (isEmailFree)
            {
                return BadRequest();
            }

            return Ok();
        }

        [HttpPost("register-user")]
        [Authorize]
        public IActionResult registerUserDetails([FromBody] CttUser user)
        {
            CttUser persistedUser = authService.registerUser(user);
            return Ok(persistedUser);
        }
    }
}
