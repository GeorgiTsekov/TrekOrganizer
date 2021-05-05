namespace TrekOrganizer.Server.Features.Profiles
{
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Models;
    using Infrastructure.Services;
    using static Infrastructure.WebConstants;
    using TrekOrganizer.Server.Features.Follows;

    public class ProfilesController : ApiController
    {
        private readonly IProfileService profiles;
        private readonly IFollowService follows;
        private readonly ICurrentUserService currentUser;

        public ProfilesController(
            IProfileService profiles,
            IFollowService follows,
            ICurrentUserService currentUser)
        {
            this.profiles = profiles;
            this.follows = follows;
            this.currentUser = currentUser;
        }

        [HttpGet]
        public async Task<ProfileServiceModel> Mine()
            => await this.profiles.ByUser(this.currentUser.GetId(), allInformation: true);

        [HttpGet]
        [Route(Id)]
        public async Task<ProfileServiceModel> Details(string id)
        {
            var includeAllInformation = await this.follows
                .IsFollower(id, this.currentUser.GetId());

            if (!includeAllInformation)
            {
                includeAllInformation = await this.profiles.IsPublic(id);
            }

            return await this.profiles.ByUser(id, includeAllInformation);
        }

        [HttpPut]
        public async Task<ActionResult> Update(UpdateProfileRequestModel model)
        {
            var userId = this.currentUser.GetId();

            var result = await this.profiles.Edit(
                userId,
                model.Email,
                model.UserName,
                model.Name,
                model.MainPhotoUrl,
                model.WebSite,
                model.Biography,
                model.Gender,
                model.IsPrivate);

            if (result.Failure)
            {
                return BadRequest(result.Error);
            }

            return Ok();
        }
    }
}
