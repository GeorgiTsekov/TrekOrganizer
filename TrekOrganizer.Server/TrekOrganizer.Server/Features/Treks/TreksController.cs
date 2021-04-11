namespace TrekOrganizer.Server.Features.Treks
{
    using Infrastructure;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections;
    using System.Threading.Tasks;

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

        //[Authorize]
        //[HttpGet]
        //public async Task<IEnumerable> All()
        //{
        //    return await this.trekService.All();
        //}

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
