namespace TrekOrganizer.Server.Features.Treks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using TrekOrganizer.Server.Features.Treks.Models;

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

        Task<bool> Edit(
            int id,
            string location,
            string description,
            string imageUrl,
            string startDate,
            string endDate,
            string categoryName,
            string userId);

        Task<bool> Delete(int id, string userId);
    }
}
