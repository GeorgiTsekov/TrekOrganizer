namespace TrekOrganizer.Server.Features.Identity
{
    using Data.Models;
    using Features.Identity.Models;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.Extensions.Options;
    using Microsoft.AspNetCore.Authorization;
    using Infrastructure.Services;

    public class IdentityController : ApiController
    {
        private readonly UserManager<User> userManager;
        private readonly IIdentityService identity;
        private readonly ICurrentUserService currentUser;
        private readonly AppSettings appSettings;

        public IdentityController(
            UserManager<User> userManager,
            IIdentityService identity,
            IOptions<AppSettings> appSettings,
            ICurrentUserService currentUser)
        {
            this.userManager = userManager;
            this.identity = identity;
            this.currentUser = currentUser;
            this.appSettings = appSettings.Value;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Register))]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName
            };

            var result = await this.userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            return Ok();
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(Login))]
        public async Task<ActionResult<LoginResponseModel>> Login(LoginRequestModel model)
        {
            var user = await this.userManager.FindByNameAsync(model.UserName);
            if (user == null)
            {
                return Unauthorized();
            }

            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);
            if (!passwordValid)
            {
                return Unauthorized();
            }

            var token = this.identity.GenerateJwtToken(
                user.Id,
                user.UserName,
                this.appSettings.Secret);

            return new LoginResponseModel
            {
                Token = token,
                User = user
            };
        }

        [HttpGet]
        [Route(nameof(User))]
        public async Task<ActionResult<UserDetailsServiceModel>> UserDetails()
        {
            var id = this.currentUser.GetId();

            var user = await this.identity.UserDetails(id);

            return user;
        }
    }
}
