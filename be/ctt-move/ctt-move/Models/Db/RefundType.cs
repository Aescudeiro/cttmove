using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class RefundType
    {
        public RefundType()
        {
            Refund = new HashSet<Refund>();
        }

        public string RefundType1 { get; set; }

        public ICollection<Refund> Refund { get; set; }
    }
}
