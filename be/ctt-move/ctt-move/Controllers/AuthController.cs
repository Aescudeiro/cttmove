using cttMove.Models.Db;
using cttMove.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
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
                Phone = loggedUser.Phone,
                PostalCode = loggedUser.PostalCode,
                TaxAddress = loggedUser.TaxAddress,
                Token = token
            };

            return Ok(userDTO);
        }

        [HttpPost("verify-email")]
        public IActionResult register ([FromBody] CttUser user)
        {
            bool isEmailFree = authService.isEmailFree(user.Email);
            
            if (isEmailFree)
            {
                return Ok(0); //0 = No Error;
            }

            return Ok(1); //1 = Error;
        }

        [HttpPost("register-user")]
        public IActionResult registerUserDetails([FromBody] CttUser user)
        {
            CttUser persistedUser = authService.registerUser(user);
            return Ok(persistedUser);
        }

        [Authorize]
        [HttpPut("update-password")]
        public IActionResult updateUserPassword ([FromBody] JObject jsonData)
        {
            dynamic json = jsonData;
            CttUser user = json.cttUser;
            string newPassword = json.newPassword;

            bool isPassUpdated = authService.updateUserPassword(user, newPassword);

            return Ok();
        }

        [Authorize]
        [HttpPut("update-user")]
        public IActionResult updateUserDetails([FromBody] CttUser user) //Should be a CttUserDTO post... password problems
        {
            CttUser updatedUser = authService.updateUser(user);

            if (updatedUser == null)
            {
                return BadRequest();
            }

            var userDTO = new //DTO Should be a proper DTO class...
            {
                Email = updatedUser.Email,
                FullName = updatedUser.FullName,
                BirthDate = updatedUser.BirthDate,
                Nif = updatedUser.Nif,
                CcNumber = updatedUser.CcNumber,
                Locality = updatedUser.Locality,
                Iban = updatedUser.Iban,
                Phone = updatedUser.Phone,
                PostalCode = updatedUser.PostalCode,
                TaxAddress = updatedUser.TaxAddress
            };

            return Ok(userDTO);
        }
    }
}
