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
        private const int REFUND_START_VALUE = 130;

        public RefundService ()
        {
            this._refundRepository = new RefundRepository();
        }

        public Refund createRefund (Refund refund)
        {
            refund.RefundValue = refund.PaidValue > REFUND_START_VALUE ? (refund.PaidValue - REFUND_START_VALUE) : 0;
            return _refundRepository.createRefund(refund);
        }

        public List<Refund> getUserRefundLst(string userEmail)
        {
            return _refundRepository.getUserRefundLst(userEmail);
        }
    }
}
