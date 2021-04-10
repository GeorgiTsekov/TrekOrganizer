namespace TrekOrganizer.Server.Features.Treks
{
    using System.Threading.Tasks;
    using Data.Models;
    using Data;

    public class TrekService : ITrekService
    {
        private readonly TrekOrganizerDbContext db;

        public TrekService(TrekOrganizerDbContext db)
        {
            this.db = db;
        }

        public async Task<int> Create(string location, string description, string imageUrl, string startDate, string endDate, int categoryId, string userId)
        {
            var trek = new Trek
            {
                Location = location,
                Description = description,
                ImageUrl = imageUrl,
                StartDate = startDate,
                EndDate = endDate,
                CategoryId = categoryId,
                UserId = userId,
            };

            this.db.Add(trek);

            await this.db.SaveChangesAsync();

            return trek.Id;
        }
    }
}
