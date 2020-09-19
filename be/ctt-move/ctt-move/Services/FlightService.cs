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

        public Flight createFlight(Flight flight)
        {
            return _flightRepository.createFlight(flight);
        }

        public Flight[] createFlight(Flight[] flightLst)
        {
            Flight[] persistedFlightLst = _flightRepository.createFlight(flightLst);

            foreach (Flight f in persistedFlightLst)
            {
                if (f == null)
                {
                    return null;
                }
            }

            return persistedFlightLst;
        }
    }
}
