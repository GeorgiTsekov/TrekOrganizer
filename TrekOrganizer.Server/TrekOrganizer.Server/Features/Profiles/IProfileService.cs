namespace TrekOrganizer.Server.Features.Profiles
{
    using System.Threading.Tasks;
    using Models;
    using Data.Models;
    using Infrastructure.Services;

    public interface IProfileService
    {
        Task<ProfileServiceModel> ByUser(string userId);

        Task<Result> Edit(
            string userId,
            string userName,
            string email,
            string name,
            string mainPhotoUrl,
            string webSite,
            string biography,
            Gender gender,
            bool isPrivate);
    }
}
