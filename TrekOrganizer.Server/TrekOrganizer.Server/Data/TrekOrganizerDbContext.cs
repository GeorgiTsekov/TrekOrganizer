namespace TrekOrganizer.Server.Data
{
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;
    using Models;

    public class TrekOrganizerDbContext : IdentityDbContext<User>
    {
        public TrekOrganizerDbContext(DbContextOptions<TrekOrganizerDbContext> options)
            : base(options)
        {
        }

        public DbSet<Category> Categories { get; set; }

        public DbSet<Trek> Treks { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder
                .Entity<Trek>()
                .HasOne(t => t.User)
                .WithMany(u => u.Treks)
                .HasForeignKey(t => t.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            builder
                .Entity<Trek>()
                .HasOne(t => t.Category)
                .WithMany(c => c.Treks)
                .HasForeignKey(t => t.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            base.OnModelCreating(builder);
        }
    }
}
