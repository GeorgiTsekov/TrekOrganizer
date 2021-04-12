namespace TrekOrganizer.Server.Features.Treks.Models
{
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.Trek;
    public class TrekDetailsServiceModel : TrekListingServiceModel
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        [MaxLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public string StartDate { get; set; }

        [Required]
        public string EndDate { get; set; }

        public int Likes { get; set; }

        [Required]
        public string OrganizerName { get; set; }
    }
}
