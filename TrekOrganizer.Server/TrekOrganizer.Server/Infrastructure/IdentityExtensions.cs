namespace TrekOrganizer.Server.Infrastructure
{
    using System.Linq;
    using System.Security.Claims;

    public static class IdentityExtensions
    {
        public static string GetId(this ClaimsPrincipal user)
            => user.Claims
                .FirstOrDefault(t => t.Type == ClaimTypes.NameIdentifier)
                ?.Value;
    }
}
