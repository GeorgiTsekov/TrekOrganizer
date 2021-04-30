namespace TrekOrganizer.Server.Features.Profiles
{
    using System.Threading.Tasks;
    using Models;
    using Data;
    using System.Linq;
    using Microsoft.EntityFrameworkCore;

    public class ProfileService : IProfileService
    {
        private readonly TrekOrganizerDbContext data;

        public ProfileService(TrekOrganizerDbContext data)
        {
            this.data = data;
        }

        public async Task<ProfileServiceModel> ByUser(string id)
        {
            var profile = this.data
                .Users
                .Where(u => u.Id == id)
                .Select(u => new ProfileServiceModel
                {
                    Name = u.Profile.Name,
                    MainPhotoUrl = u.Profile.MainPhotoUrl,
                    WebSite = u.Profile.WebSite,
                    Biography = u.Profile.Biography,
                    Gender = u.Profile.Gender.ToString(),
                    IsPrivate = u.Profile.IsPrivate
                })
                .FirstOrDefaultAsync();

            return await profile;
        }
    }
}
