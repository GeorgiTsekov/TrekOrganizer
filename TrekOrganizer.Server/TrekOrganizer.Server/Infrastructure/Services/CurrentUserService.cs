namespace TrekOrganizer.Server.Infrastructure.Services
{
    using Microsoft.AspNetCore.Http;
    using Extensions;
    using System.Security.Claims;

    public class CurrentUserService : ICurrentUserService
    {
        private readonly ClaimsPrincipal user;

        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            this.user = httpContextAccessor.HttpContext?.User;
        }


        public string GetId()
        {
            return this.user?.GetId();
        }

        public string GetEmail()
        {
            return this.user?.Identity?.Name;
        }
    }
}
