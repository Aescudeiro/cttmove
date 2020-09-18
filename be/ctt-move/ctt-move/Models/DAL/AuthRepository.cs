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

        public void registerNewEmail (string email, string password)
        {
            dbContext.CttUser.Add(new CttUser
            {
                Email = email,
                Pass = password
            });
        }

        public CttUser regsiterUserDetails (CttUser user)
        {
            dbContext.Entry(this).CurrentValues.SetValues(new
            {
                user.FullName,
                user.BirthDate,
                user.CcNumber,
                user.Iban,
                user.Locality,
                user.Nif,
                user.Phone
            });

            return getUser(user.Email);
        }
    }
}
