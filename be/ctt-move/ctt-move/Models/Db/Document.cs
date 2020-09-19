using System;
using System.Collections.Generic;

namespace cttMove.Models.Db
{
    public partial class Document
    {
        public int Id { get; set; }
        public string DocumentType { get; set; }
        public byte[] DocumentData { get; set; }
        public int? RefundId { get; set; }

        public DocumentType DocumentTypeNavigation { get; set; }
        public Refund Refund { get; set; }
    }
}
