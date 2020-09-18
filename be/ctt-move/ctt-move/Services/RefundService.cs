using cttMove.Models.DAL;
using cttMove.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Services
{
    public class RefundService
    {
        private RefundRepository _refundRepository;

        public RefundService ()
        {
            this._refundRepository = new RefundRepository();
        }

        public Refund createRefund (Refund refund)
        {
            return _refundRepository.createRefund(refund);
        }
    }
}
