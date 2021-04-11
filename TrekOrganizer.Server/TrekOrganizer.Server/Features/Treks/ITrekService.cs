namespace TrekOrganizer.Server.Features.Treks
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

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

        public Task<IEnumerable<TrekListingResponseModel>> ByCategory(string categoryName);
    }
}
