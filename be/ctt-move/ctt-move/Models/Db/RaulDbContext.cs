using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ctt-move.Models.Db
{
    public partial class RaulDbContext : DbContext
    {
        public RaulDbContext()
        {
        }

        public RaulDbContext(DbContextOptions<RaulDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CttUser> CttUser { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:cttmove.database.windows.net;Database=cttmove;User ID=cttmove;Password=hack2emerge!;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CttUser>(entity =>
            {
                entity.HasKey(e => e.Email);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(100)
                    .ValueGeneratedNever();

                entity.Property(e => e.BirthDate)
                    .HasColumnName("birth_date")
                    .HasColumnType("date");

                entity.Property(e => e.CcNumber).HasColumnName("cc_number");

                entity.Property(e => e.FullName)
                    .HasColumnName("full_name")
                    .HasMaxLength(100);

                entity.Property(e => e.Iban).HasColumnName("iban");

                entity.Property(e => e.Locality)
                    .HasColumnName("locality")
                    .HasMaxLength(100);

                entity.Property(e => e.Nif).HasColumnName("nif");

                entity.Property(e => e.Pass).HasColumnName("pass");

                entity.Property(e => e.Phone).HasColumnName("phone");
            });
        }
    }
}
