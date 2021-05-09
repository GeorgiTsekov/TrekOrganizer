namespace TrekOrganizer.Server.Data.Models
{
    using Microsoft.AspNetCore.Identity;
    using System;
    using System.Collections.Generic;
    using Base;

    public class User : IdentityUser, IEntity
    {
        public User()
        {
            this.Treks = new HashSet<Trek>();
        }

        public DateTime CreatedOn { get; set; }

        public string CreatedBy { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public string ModifiedBy { get; set; }

        public Profile Profile { get; set; }

        public virtual IEnumerable<Trek> Treks { get; }
    }
}
