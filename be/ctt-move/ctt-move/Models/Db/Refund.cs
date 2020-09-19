using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class Refund
    {
        public Refund()
        {
            Document = new HashSet<Document>();
            Flight = new HashSet<Flight>();
        }

        public int Id { get; set; }
        public bool? RoundTrip { get; set; }
        public int? PaidValue { get; set; }
        public int? RefundValue { get; set; }
        public string UserEmail { get; set; }
        public string RefundType { get; set; }

        public RefundType RefundTypeNavigation { get; set; }
        public CttUser UserEmailNavigation { get; set; }
        public ICollection<Document> Document { get; set; }
        public ICollection<Flight> Flight { get; set; }
    }
}
