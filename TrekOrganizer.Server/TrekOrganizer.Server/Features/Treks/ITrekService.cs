namespace TrekOrganizer.Server.Features.Treks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Models;
    using Infrastructure.Services;

    public interface ITrekService
    {
        Task<int> Create(
            string location, 
            string description, 
            string imageUrl,
            string startDate, 
            string endDate,
            string categoryName, 
            string userId);

        Task<IEnumerable<TrekListingServiceModel>> ByCategory(string categoryName);

        Task<TrekDetailsServiceModel> Details(int id, string userId);

        Task<Result> Edit(
            int id,
            string location,
            string description,
            string imageUrl,
            string startDate,
            string endDate,
            string categoryName,
            string userId);

        Task<Result> Delete(int id, string userId);

        Task<Result> Like(int id, string userId);
    }
}
