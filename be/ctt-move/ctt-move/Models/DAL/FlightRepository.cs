using cttMove.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Models.DAL
{
    public class FlightRepository
    {

        private CttMoveDbContext dbContext;
        
        public FlightRepository ()
        {
            this.dbContext = new CttMoveDbContext();
        }

        public Flight getFlight(int reservationCode)
        {
            return dbContext.Flight.Where(f => f.ReservationCode == reservationCode).FirstOrDefault();
        }

        public Flight createFlight(Flight flight)
        {
            dbContext.Flight.Add(flight);
            dbContext.SaveChanges();

            return getFlight(flight.ReservationCode);
        }

        public Flight[] createFlight(Flight[] flightLst)
        {
            Flight[] persistedFlights = new Flight[2];

            for (int i = 0; i < flightLst.Length; i++)
            {
                dbContext.Flight.Add(flightLst[i]);
                persistedFlights[i] = getFlight(flightLst[i].ReservationCode);
            }

            return persistedFlights;
        }
    }
}
