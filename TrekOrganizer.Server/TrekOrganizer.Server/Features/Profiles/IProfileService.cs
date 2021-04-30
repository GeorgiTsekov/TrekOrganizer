namespace TrekOrganizer.Server.Features.Profiles
{
    using System.Threading.Tasks;
    using Models;
    public interface IProfileService
    {
        Task<ProfileServiceModel> ByUser(string id);
    }
}
