﻿namespace TrekOrganizer.Server.Features.Treks
{
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using System.Collections;
    using System.Threading.Tasks;
    using Models;
    using Infrastructure.Services;
    using static Infrastructure.WebConstants;

    public class TreksController : ApiController
    {
        private readonly ITrekService treks;
        private readonly ICurrentUserService currentUser;

        public TreksController(
            ITrekService treks,
            ICurrentUserService currentUser)
        {
            this.treks = treks;
            this.currentUser = currentUser;
        }

        [HttpGet]
        public async Task<IEnumerable> ByCategory(string categoryName)
        {
            return await this.treks.ByCategory(categoryName);
        }

        [Authorize]
        [HttpGet]
        [Route(Id)]
        public async Task<ActionResult<TrekDetailsServiceModel>> Details(int id)
        {
            var userId = this.currentUser.GetId();

            var trek = await this.treks.Details(id, userId);

            return trek;
        }

        [Authorize]
        [HttpPost]
        public async Task<ActionResult> Create(CreateTrekRequestModel model)
        {
            var userId = this.currentUser.GetId();

            var id = await this.treks.Create(
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
        [Route(Id)]
        public async Task<ActionResult> Edit(int id, EditTrekRequestModel model)
        {
            var userId = this.currentUser.GetId();

            var result = await this.treks.Edit(
                id,
                model.Location,
                model.Description,
                model.ImageUrl,
                model.StartDate,
                model.EndDate,
                model.CategoryName,
                userId);

            if (result.Failure)
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
            var userId = this.currentUser.GetId();

            var result = await this.treks.Delete(id, userId);
            if (result.Failure)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
