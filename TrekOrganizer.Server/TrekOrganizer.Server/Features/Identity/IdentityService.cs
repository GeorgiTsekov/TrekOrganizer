namespace TrekOrganizer.Server.Features.Identity
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.IdentityModel.Tokens;
    using System;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using Data;
    using Features.Identity.Models;

    public class IdentityService : IIdentityService
    {
        private readonly TrekOrganizerDbContext data;

        public IdentityService(TrekOrganizerDbContext data)
        {
            this.data = data;
        }

        public string GenerateJwtToken(string userId, string userName, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
        }

        public async Task<UserDetailsServiceModel> UserDetails(string id)
        {
            var user = this.data
                .Users
                .Where(u => u.Id == id)
                .Select(t => new UserDetailsServiceModel
                {
                    Id = t.Id,
                    UserName = t.UserName,
                    Email = t.Email
                })
                .FirstOrDefaultAsync();

            return await user;
        }
    }
}
