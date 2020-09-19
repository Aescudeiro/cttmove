using cttMove.Models.DAL;
using cttMove.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Services
{
    public class FlightService
    {
        private FlightRepository _flightRepository;

        public FlightService ()
        {
            this._flightRepository = new FlightRepository();
        }

        public void createFlight(Flight flight)
        {
            _flightRepository.createFlight(flight);
        }
    }
}
