namespace TrekOrganizer.Server.Features.Treks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using TrekOrganizer.Server.Features.Treks.Models;

    public interface ITrekService
    {
        public Task<int> Create(
            string location, 
            string description, 
            string imageUrl,
            string startDate, 
            string endDate,
            int categoryId, 
            string userId);

        public Task<IEnumerable<TrekListingServiceModel>> ByCategory(string categoryName);

        public Task<TrekDetailsServiceModel> Details(int id, string userId);
    }
}
