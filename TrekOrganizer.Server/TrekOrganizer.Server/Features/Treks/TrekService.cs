namespace TrekOrganizer.Server.Features.Treks
{
    using System.Threading.Tasks;
    using Data.Models;
    using Data;
    using System.Collections.Generic;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;
    using Models;
    using Infrastructure.Services;

    public class TrekService : ITrekService
    {
        private readonly TrekOrganizerDbContext data;

        public TrekService(TrekOrganizerDbContext data)
        {
            this.data = data;
        }

        public async Task<int> Create(string location, string description, string imageUrl, string startDate, string endDate, string categoryName, string userId)
        {
            var trek = new Trek
            {
                Location = location,
                Description = description,
                ImageUrl = imageUrl,
                StartDate = startDate,
                EndDate = endDate,
                CategoryId = this.data.Categories.Where(c => c.Name == categoryName).FirstOrDefault().Id,
                UserId = userId,
                Likes = 0
            };

            this.data.Add(trek);

            await this.data.SaveChangesAsync();

            return trek.Id;
        }

        public async Task<IEnumerable<TrekListingServiceModel>> ByCategory(string categoryName)
        {
            if (categoryName == "All" || categoryName == null)
            {
                var treks = this.data
                .Treks
                .OrderByDescending(t => t.CreatedOn)
                .Select(t => new TrekListingServiceModel
                {
                    Id = t.Id,
                    Location = t.Location,
                    CategoryName = t.Category.Name,
                    ImageUrl = t.ImageUrl,
                    OrganizerName = t.CreatedBy,
                    StartDate = t.StartDate,
                    EndDate = t.EndDate,
                    Likes = t.Likes
                })
                .ToListAsync();

                return await treks;
            }
            else
            {
                var categoryId = this.data.Categories.FirstOrDefault(c => c.Name == categoryName).Id;
                var treksByCategory = this.data
                    .Treks
                    .Where(t => t.CategoryId == categoryId)
                    .OrderByDescending(t => t.CreatedOn)
                    .Select(t => new TrekListingServiceModel
                    {
                        Id = t.Id,
                        Location = t.Location,
                        CategoryName = t.Category.Name,
                        ImageUrl = t.ImageUrl,
                        OrganizerName = t.CreatedBy,
                        StartDate = t.StartDate,
                        EndDate = t.EndDate,
                        Likes = t.Likes
                    })
                    .ToListAsync();

                return await treksByCategory;
            }
        }

        public async Task<TrekDetailsServiceModel> Details(int id)
        {
            var trek = this.data
                .Treks
                .Where(t => t.Id == id)
                .Select(t => new TrekDetailsServiceModel
                {
                    Id = t.Id,
                    Location = t.Location,
                    CategoryName = t.Category.Name,
                    ImageUrl = t.ImageUrl,
                    Description = t.Description,
                    StartDate = t.StartDate,
                    EndDate = t.EndDate,
                    Likes = t.Likes,
                    OrganizerName = t.User.UserName
                })
                .FirstOrDefaultAsync();

            return await trek;
        }

        public async Task<Result> Edit(
            int id,
            string location,
            string description,
            string imageUrl,
            string startDate,
            string endDate,
            string categoryName,
            string userId)
        {
            Trek trek = await this.GetByIdAndByUserId(id, userId);

            if (trek == null)
            {
                return "You are not authorized to update this trek!";
            }

            trek.Location = location;
            trek.Description = description;
            trek.ImageUrl = imageUrl;
            trek.StartDate = startDate;
            trek.CategoryId = this.data.Categories.Where(c => c.Name == categoryName).FirstOrDefault().Id;

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<Result> Delete(int id, string userId)
        {
            var trek = await this.GetByIdAndByUserId(id, userId);
            if (trek == null)
            {
                return "You are not authorized to delete this trek!";
            }

            this.data.Treks.Remove(trek);

            await this.data.SaveChangesAsync();

            return true;
        }

        public async Task<Result> Like(int id, string userId)
        {
            var trek = await this.data
                .Treks
                .Where(t => t.Id == id && !t.Votes.Any(v => v.UserId == userId))
                .FirstOrDefaultAsync();

            if (trek == null)
            {
                return "You liked already this trek!";
            }

            this.data.Votes.Add(new Vote
            {
                TrekId = id,
                UserId = userId,
                IsLiked = true
            });

            trek.Likes++;

            await this.data.SaveChangesAsync();

            return true;
        }

        private async Task<Trek> GetByIdAndByUserId(int id, string userId)
        {
            return await this.data
                .Treks
                .Where(t => t.Id == id && t.UserId == userId)
                .FirstOrDefaultAsync();
        }
    }
}
