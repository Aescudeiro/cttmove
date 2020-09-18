using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cttMove.Models.Db;
using Microsoft.AspNetCore.Builder;

namespace cttMove.Models.DAL
{
    public class AuthRepository
    {
        private CttMoveDbContext dbContext;

        public AuthRepository ()
        {
            this.dbContext = new CttMoveDbContext();
        }

        public CttUser getUser(string email)
        {
            return dbContext.CttUser.Where(u => u.Email == email).FirstOrDefault();
        }
    }
}
