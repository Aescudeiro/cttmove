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

        public bool isUserPersisted(string email)
        {
            return dbContext.CttUser.Any(u => u.Email == email);
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

        public CttUser registerUser(CttUser user)
        {
            dbContext.Add(user);
            dbContext.SaveChanges();

            return getUser(user.Email);
        }

        public CttUser updateUser(CttUser user)
        {
            CttUser preUpdateUser = new CttUser{ 
                Email = user.Email != null ? user.Email : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Email).FirstOrDefault(),
                Pass = user.Pass != null ? user.Pass : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Pass).FirstOrDefault(),
                FullName = user.FullName != null ? user.FullName : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.FullName).FirstOrDefault(),
                BirthDate = user.BirthDate != null ? user.BirthDate : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.BirthDate).FirstOrDefault(),
                Nif = user.Nif != null ? user.Nif : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Nif).FirstOrDefault(),
                CcNumber = user.CcNumber != null ? user.CcNumber : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.CcNumber).FirstOrDefault(),
                Locality = user.Locality != null ? user.Locality : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Locality).FirstOrDefault(),
                Iban = user.Iban != null ? user.Iban : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Iban).FirstOrDefault(),
                Phone = user.Phone != null ? user.Phone : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.Phone).FirstOrDefault(),
                PostalCode = user.PostalCode != null ? user.PostalCode : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.PostalCode).FirstOrDefault(),
                TaxAddress = user.TaxAddress != null ? user.TaxAddress : dbContext.CttUser.Where(u => u.Email == user.Email).Select(u => u.TaxAddress).FirstOrDefault(),
            };


            dbContext.Update(preUpdateUser);
            dbContext.SaveChanges();
            return getUser(user.Email);
        }

        public string getHashedPass(string email)
        {
            return dbContext.CttUser.Where(u => u.Email == email).Select(u => u.Pass).FirstOrDefault();
        }
    }
}
