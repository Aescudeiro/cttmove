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
    [Authorize]
    [ApiController]
    [Route("api/flight")]
    public class FlightController : ControllerBase
    {
        private FlightService flightService;

        public FlightController ()
        {
            this.flightService = new FlightService();
        }

        [HttpPost("create-flight")]
        public IActionResult createFlight ([FromBody] Flight flight)
        {
            flightService.createFlight(flight);
            return Ok();
        }

        [HttpPost("create-flight")]
        public IActionResult createFlight([FromBody] Flight[] flightLst)
        {
            return Ok();
        }
    }
}
