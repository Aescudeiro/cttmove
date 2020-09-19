using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class Flight
    {
        public int ReservationCode { get; set; }
        public string DepAirport { get; set; }
        public string ArrAirport { get; set; }
        public DateTime? FlightDate { get; set; }
        public int? TicketNumber { get; set; }
        public int? Price { get; set; }
        public int? RefundId { get; set; }

        public Refund Refund { get; set; }
    }
}
