using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class DocumentType
    {
        public DocumentType()
        {
            Document = new HashSet<Document>();
        }

        public string DocumentType1 { get; set; }

        public ICollection<Document> Document { get; set; }
    }
}
