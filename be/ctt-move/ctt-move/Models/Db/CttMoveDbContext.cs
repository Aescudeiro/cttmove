using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Models.Db
{
    public partial class CttMoveDbContext : DbContext
    {

        public CttMoveDbContext ()
        {
        }

        public CttMoveDbContext (DbContextOptions<CttMoveDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS;Database=Raul;Integrated Security=SSPI;");
            }
        }


    }

}
