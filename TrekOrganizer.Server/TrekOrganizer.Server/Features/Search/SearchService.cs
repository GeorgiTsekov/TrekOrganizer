using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrekOrganizer.Server.Data;
using TrekOrganizer.Server.Features.Search.Models;

namespace TrekOrganizer.Server.Features.Search
{
    public class SearchService : ISearchService
    {
        private readonly TrekOrganizerDbContext data;

        public SearchService(TrekOrganizerDbContext data)
        {
            this.data = data;
        }

        public async Task<IEnumerable<ProfileSearchServiceModel>> Profiles(string query)
        {
            return await this.data
                .Users
                .Where(u => u.UserName.ToLower().Contains(query.ToLower()) ||
                    u.Profile.Name.ToLower().Contains(query.ToLower()))
                .Select(u => new ProfileSearchServiceModel
                {
                    UserId = u.Id,
                    UserName = u.UserName,
                    ProfilePhotoUrl = u.Profile.MainPhotoUrl
                })
                .ToListAsync();

        }
    }
}
