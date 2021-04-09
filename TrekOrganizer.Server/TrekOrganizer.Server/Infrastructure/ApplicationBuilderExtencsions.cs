using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TrekOrganizer.Server.Data;

namespace TrekOrganizer.Server.Infrastructure
{
    public static class ApplicationBuilderExtencsions
    {
        public static void ApplyMigrations(this IApplicationBuilder app)
        {
            using var services = app.ApplicationServices.CreateScope();

            var dbContext = services.ServiceProvider.GetService<TrekOrganizerDbContext>();

            dbContext.Database.Migrate();
        }
    }
}
