namespace TrekOrganizer.Server.Features.Treks
{
    using System.Threading.Tasks;
    using Data.Models;
    using Data;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    public class TrekService : ITrekService
    {
        private readonly TrekOrganizerDbContext data;

        public TrekService(TrekOrganizerDbContext data)
        {
            this.data = data;
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

            this.data.Add(trek);

            await this.data.SaveChangesAsync();

            return trek.Id;
        }

        public async Task<IEnumerable<TrekListingResponseModel>> ByCategory(string categoryName)
        {
            var categoryId = this.data.Categories.FirstOrDefault(c => c.Name == categoryName).Id;

            var treksByCategory = this.data
                .Treks
                .Where(t => t.CategoryId == categoryId)
                .Select(t => new TrekListingResponseModel
                {
                    Id = t.Id,
                    Location = t.Location,
                    CategoryName = categoryName,
                    ImageUrl = t.ImageUrl
                })
                .ToListAsync();

            return await treksByCategory;
        }
    }
}
