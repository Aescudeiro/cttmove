using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.Extensions.Configuration;

namespace cttMove.Models.Db
{
    public partial class CttMoveDbContext : DbContext
    {
        public CttMoveDbContext()
        {
        }

        public CttMoveDbContext(DbContextOptions<CttMoveDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CttUser> CttUser { get; set; }
        public virtual DbSet<Document> Document { get; set; }
        public virtual DbSet<DocumentType> DocumentType { get; set; }
        public virtual DbSet<Flight> Flight { get; set; }
        public virtual DbSet<Refund> Refund { get; set; }
        public virtual DbSet<RefundType> RefundType { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                .AddJsonFile("appsettings.json")
                .Build();

            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));
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

            modelBuilder.Entity<Document>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DocumentData).HasColumnName("document_data");

                entity.Property(e => e.DocumentType)
                    .HasColumnName("document_type")
                    .HasMaxLength(100);

                entity.Property(e => e.RefundId).HasColumnName("refund_id");

                entity.HasOne(d => d.DocumentTypeNavigation)
                    .WithMany(p => p.Document)
                    .HasForeignKey(d => d.DocumentType)
                    .HasConstraintName("FK__Document__docume__6A30C649");

                entity.HasOne(d => d.Refund)
                    .WithMany(p => p.Document)
                    .HasForeignKey(d => d.RefundId)
                    .HasConstraintName("FK__Document__refund__6B24EA82");
            });

            modelBuilder.Entity<DocumentType>(entity =>
            {
                entity.HasKey(e => e.DocumentType1);

                entity.Property(e => e.DocumentType1)
                    .HasColumnName("document_type")
                    .HasMaxLength(100)
                    .ValueGeneratedNever();
            });

            modelBuilder.Entity<Flight>(entity =>
            {
                entity.HasKey(e => e.ReservationCode);

                entity.Property(e => e.ReservationCode)
                    .HasColumnName("reservation_code")
                    .ValueGeneratedNever();

                entity.Property(e => e.ArrAirport)
                    .HasColumnName("arr_airport")
                    .HasMaxLength(100);

                entity.Property(e => e.DepAirport)
                    .HasColumnName("dep_airport")
                    .HasMaxLength(100);

                entity.Property(e => e.FlightDate)
                    .HasColumnName("flight_date")
                    .HasColumnType("date");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.RefundId).HasColumnName("refund_id");

                entity.Property(e => e.TicketNumber).HasColumnName("ticket_number");

                entity.HasOne(d => d.Refund)
                    .WithMany(p => p.Flight)
                    .HasForeignKey(d => d.RefundId)
                    .HasConstraintName("FK__Flight__refund_i__6E01572D");
            });

            modelBuilder.Entity<Refund>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.PaidValue).HasColumnName("paid_value");

                entity.Property(e => e.RefundType)
                    .HasColumnName("refund_type")
                    .HasMaxLength(100);

                entity.Property(e => e.RefundValue).HasColumnName("refund_value");

                entity.Property(e => e.RoundTrip).HasColumnName("round_trip");

                entity.Property(e => e.UserEmail)
                    .HasColumnName("user_email")
                    .HasMaxLength(100);

                entity.HasOne(d => d.RefundTypeNavigation)
                    .WithMany(p => p.Refund)
                    .HasForeignKey(d => d.RefundType)
                    .HasConstraintName("FK__Refund__refund_t__656C112C");

                entity.HasOne(d => d.UserEmailNavigation)
                    .WithMany(p => p.Refund)
                    .HasForeignKey(d => d.UserEmail)
                    .HasConstraintName("FK__Refund__user_ema__6477ECF3");
            });

            modelBuilder.Entity<RefundType>(entity =>
            {
                entity.HasKey(e => e.RefundType1);

                entity.Property(e => e.RefundType1)
                    .HasColumnName("refund_type")
                    .HasMaxLength(100)
                    .ValueGeneratedNever();
            });
        }
    }
}
