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

        [HttpPost("flight")]
        public IActionResult createFlight ([FromBody] Flight flight)
        {
            Flight persistedFlight = flightService.createFlight(flight);
            return persistedFlight != null ? Ok(persistedFlight) : Ok(1);
        }

        [HttpPost("rountTripFlights")]
        public IActionResult createFlight([FromBody] Flight[] flightLst)
        {
            Flight[] persistedFlightLst = flightService.createFlight(flightLst);
            return persistedFlightLst != null ? Ok(persistedFlightLst) : Ok(1);
        }
    }
}
