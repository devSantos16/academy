using AwesomeDevEvents.Entities;
using Microsoft.EntityFrameworkCore;

namespace AwesomeDevEvents.Persistence
{
    public class DevEventsDbContext : DbContext
    {
        public DbSet<DevEvents> DevEvents { get; set; }

        public DbSet<Speaker> DevEventSpeakers { get; set; }

        public DevEventsDbContext(DbContextOptions<DevEventsDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<DevEvents>(e =>
            {
                e.HasKey(de => de.Id);
                
                e.Property(de => de.Title).IsRequired(false);
                e.Property(de => de.StartDate).HasColumnName("Start_Date");
                e.Property(de => de.EndDate).HasColumnName("End_Date");

                e.Property(de => de.Description)
                .HasMaxLength(300)
                .HasColumnType("varchar(300)");

                e.HasMany(de => de.Speakers)
                .WithOne()
                .HasForeignKey(s => s.DevEventId);

            });

            builder.Entity<Speaker>(e =>
            {
                e.HasKey(de => de.Id);
            });
        }
    }
}
