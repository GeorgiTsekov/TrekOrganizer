using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrekOrganizer.Models
{
    public class Trek
    {
        public int Id { get; set; }

        public string Location { get; set; }

        public string Description { get; set; }

        public string Category { get; set; }

        public string StartDate { get; set; }

        public string EndDate { get; set; }

        public string ImageURL { get; set; }

        public int Likes { get; set; }

        public string Organizer { get; set; }
    }
}
