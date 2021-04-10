namespace TrekOrganizer.Server.Features.Treks
{
    using Infrastructure;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    public class TreksController : ApiController
    {
        private readonly ITrekService trekService;

        public TreksController(ITrekService trekService)
        {
            this.trekService = trekService;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Create(CreateTrekRequestModel model)
        {
            var userId = this.User.GetId();

            var id = await this.trekService.Create(
                model.Location, 
                model.Description, 
                model.ImageUrl,
                model.StartDate, 
                model.EndDate, 
                model.CategoryId,
                userId);

            return Created(nameof(this.Create), id);
        }
    }
}
