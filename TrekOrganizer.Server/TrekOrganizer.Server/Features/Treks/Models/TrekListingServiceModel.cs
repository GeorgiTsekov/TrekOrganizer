namespace TrekOrganizer.Server.Features.Treks.Models
{
    using System.ComponentModel.DataAnnotations;

    public class TrekListingServiceModel
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Location { get; set; }

        [Required]
        public string CategoryName { get; set; }

        [Required]
        public string ImageUrl { get; set; }
    }
}
