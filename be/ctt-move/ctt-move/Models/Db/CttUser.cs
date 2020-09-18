using System;
using System.Collections.Generic;

namespace ctt-move.Models.Db
{
    public partial class CttUser
    {
        public string Email { get; set; }
        public string Pass { get; set; }
        public string FullName { get; set; }
        public DateTime? BirthDate { get; set; }
        public int? Nif { get; set; }
        public int? CcNumber { get; set; }
        public string Locality { get; set; }
        public int? Iban { get; set; }
        public int? Phone { get; set; }
    }
}
