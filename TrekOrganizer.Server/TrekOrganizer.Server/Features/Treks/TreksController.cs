namespace TrekOrganizer.Server.Features.Treks
{
    using Infrastructure.Extensions;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections;
    using System.Threading.Tasks;
    using TrekOrganizer.Server.Features.Treks.Models;

    public class TreksController : ApiController
    {
        private readonly ITrekService trekService;

        public TreksController(ITrekService trekService)
        {
            this.trekService = trekService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable> ByCategory(string categoryName)
        {
            return await this.trekService.ByCategory(categoryName);
        }

        //[Authorize]
        //[HttpGet]
        //public async Task<IEnumerable> All()
        //{
        //    return await this.trekService.All();
        //}

        [HttpGet]
        [Route("{id}")]
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
                model.CategoryId,
                userId);

            return Created(nameof(this.Create), id);
        }
    }
}
