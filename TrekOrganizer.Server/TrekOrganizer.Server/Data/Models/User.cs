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
        }

        public IEnumerable<Trek> Treks { get; }
    }
}
