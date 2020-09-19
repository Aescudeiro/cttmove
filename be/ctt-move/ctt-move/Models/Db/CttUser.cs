using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class CttUser
    {
        public CttUser()
        {
            Refund = new HashSet<Refund>();
        }

        public string Email { get; set; }
        public string Pass { get; set; }
        public string FullName { get; set; }
        public DateTime? BirthDate { get; set; }
        public int? Nif { get; set; }
        public int? CcNumber { get; set; }
        public string Locality { get; set; }
        public int? Iban { get; set; }
        public int? Phone { get; set; }
        public string PostalCode { get; set; }
        public string TaxAddress { get; set; }

        public ICollection<Refund> Refund { get; set; }
    }
}
