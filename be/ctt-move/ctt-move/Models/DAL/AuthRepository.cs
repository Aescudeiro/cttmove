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
            dbContext.SaveChanges();
        }

        public CttUser regsiterUserDetails (CttUser user)
        {

            CttUser persistedUser = getUser(user.Email);
            
            if (persistedUser == null)
            {
                return null;
            }

            persistedUser.FullName = user.FullName.Trim();
            persistedUser.BirthDate = user.BirthDate;
            persistedUser.CcNumber = user.CcNumber;
            persistedUser.Iban = user.Iban;
            persistedUser.Locality = user.Locality.Trim();
            persistedUser.Nif = user.Nif;
            persistedUser.Phone = user.Phone;

            dbContext.SaveChanges();

            return getUser(user.Email);
        }
    }
}
