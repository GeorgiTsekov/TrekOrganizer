namespace TrekOrganizer.Server.Features.Follows
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Infrastructure.Services;
    using Microsoft.EntityFrameworkCore;
    using TrekOrganizer.Server.Data;
    using TrekOrganizer.Server.Data.Models;

    public class FollowService : IFollowService
    {
        private readonly TrekOrganizerDbContext data;

        public FollowService(TrekOrganizerDbContext data)
        {
            this.data = data;
        }

        public async Task<Result> Follow(string userId, string followerId)
        {
            var userAlreadyFollowed = await this.data
                .Follows
                .AnyAsync(f => f.UserId == userId && f.FollowerId == followerId);

            if (userAlreadyFollowed)
            {
                return "This user is already followed!";
            }

            var publicProfile = await this.data
                .Profiles
                .Where(p => p.UserId == userId)
                .Select(p => !p.IsPrivate)
                .FirstOrDefaultAsync();

            this.data.Follows.Add(new Follow
            {
                UserId = userId,
                FollowerId = followerId,
                IsApproved = publicProfile
            });

            await this.data.SaveChangesAsync();

            return true;
        }
    }
}
