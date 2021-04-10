namespace TrekOrganizer.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System.Collections.Generic;

    public class User : IdentityUser
    {
        public IEnumerable<Trek> Treks { get; } = new HashSet<Trek>();
    }
}
