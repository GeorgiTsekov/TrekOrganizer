using System.Threading.Tasks;
using TrekOrganizer.Server.Features.Identity.Models;

namespace TrekOrganizer.Server.Features.Identity
{
    public interface IIdentityService
    {
        string GenerateJwtToken(string userId, string userName, string secret);

        public Task<UserDetailsServiceModel> UserDetails(string id);
    }
}
