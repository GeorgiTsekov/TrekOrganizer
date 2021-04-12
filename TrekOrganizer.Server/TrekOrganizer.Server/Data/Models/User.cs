namespace TrekOrganizer.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;

    public class User : IdentityUser
    {
        public User()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Treks = new HashSet<Trek>();
            this.Votes = new HashSet<Vote>();
        }

        public IEnumerable<Trek> Treks { get; }

        public IEnumerable<Vote> Votes { get; }
    }
}
