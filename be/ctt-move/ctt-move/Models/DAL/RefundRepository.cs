using cttMove.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Models.DAL
{
    public class RefundRepository
    {
        private CttMoveDbContext dbContext;

        public RefundRepository ()
        {
            this.dbContext = new CttMoveDbContext();
        }

        public Refund getRefundbyId (int id)
        {
            return dbContext.Refund.Where(r => r.Id == id).FirstOrDefault();
        }

        public List<Refund> getUserRefundLst (string userEmail)
        {
            return dbContext.Refund.Where(r => r.UserEmail == userEmail).ToList();
        }

        public Refund createRefund (Refund postedRefund)
        {
            dbContext.Refund.Add(postedRefund);
            dbContext.SaveChanges();
            return postedRefund;
        }
    }
}
