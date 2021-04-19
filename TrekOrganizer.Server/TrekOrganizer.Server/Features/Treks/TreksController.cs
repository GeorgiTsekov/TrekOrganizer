namespace TrekOrganizer.Server.Features.Treks
{
    using Infrastructure.Extensions;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections;
    using System.Threading.Tasks;
    using TrekOrganizer.Server.Features.Treks.Models;

    using static Infrastructure.WebConstants;

    public class TreksController : ApiController
    {
        private readonly ITrekService trekService;

        public TreksController(ITrekService trekService)
        {
            this.trekService = trekService;
        }

        [HttpGet]
        public async Task<IEnumerable> ByCategory(string categoryName)
        {
            return await this.trekService.ByCategory(categoryName);
        }

        [Authorize]
        [HttpGet]
        [Route(Id)]
        public async Task<ActionResult<TrekDetailsServiceModel>> Details(int id)
        {
            var userId = this.User.GetId();

            var trek = await this.trekService.Details(id, userId);

            return trek;
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
                model.CategoryName,
                userId);

            return Created(nameof(this.Create), id);
        }

        [Authorize]
        [HttpPut]
        public async Task<ActionResult> Edit(EditTrekRequestModel model)
        {
            var userId = this.User.GetId();

            var updatedTrek = await this.trekService.Edit(
                model.Id,
                model.Location,
                model.Description,
                model.ImageUrl,
                model.StartDate,
                model.EndDate,
                model.CategoryName,
                userId);

            if (!updatedTrek)
            {
                return BadRequest();
            }

            return Ok();
        }

        [Authorize]
        [HttpDelete]
        [Route(Id)]
        public async Task<ActionResult> Delete(int id)
        {
            var userId = this.User.GetId();

            var deleted = await this.trekService.Delete(id, userId);

            if (!deleted)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
