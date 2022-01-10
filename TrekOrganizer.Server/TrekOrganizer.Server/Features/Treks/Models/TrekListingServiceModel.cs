namespace TrekOrganizer.Server.Features.Treks.Models
{
    using System.ComponentModel.DataAnnotations;

    public class TrekListingServiceModel
    {
        public int Id { get; set; }

        [Required]
        public string StartDate { get; set; }

        [Required]
        public string EndDate { get; set; }

        public int Likes { get; set; }

        [Required]
        public string OrganizerName { get; set; }

        [Required]
        [MaxLength(50)]
        public string Location { get; set; }

        [Required]
        public string CategoryName { get; set; }

        [Required]
        public string ImageUrl { get; set; }
    }
}
