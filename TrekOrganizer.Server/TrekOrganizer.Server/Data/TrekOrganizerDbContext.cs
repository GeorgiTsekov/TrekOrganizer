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
    }
}
