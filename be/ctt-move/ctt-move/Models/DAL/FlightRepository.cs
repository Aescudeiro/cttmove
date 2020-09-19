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

        public void createFlight(Flight flight)
        {

        }
    }
}
