namespace TrekOrganizer.Server.Features.Treks.Models
{
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.Trek;
    public class TrekDetailsServiceModel : TrekListingServiceModel
    {
        [Required]
        [MaxLength(MaxDescriptionLength)]
        public string Description { get; set; }
    }
}
