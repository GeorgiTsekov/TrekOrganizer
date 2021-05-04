namespace TrekOrganizer.Server.Features.Search
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using TrekOrganizer.Server.Features.Search.Models;

    public interface ISearchService
    {
        Task<IEnumerable<ProfileSearchServiceModel>> Profiles(string query);
    }
}
