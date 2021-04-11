namespace TrekOrganizer.Server.Features.Treks
{
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.Trek;

    public class CreateTrekRequestModel
    {
        [Required]
        [MaxLength(50)]
        public string Location { get; set; }

        [Required]
        [MaxLength(MaxDescriptionLength)]
        public string Description { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        public string StartDate { get; set; }

        [Required]
        public string EndDate { get; set; }

        [Range(1, 8)]
        public int CategoryId { get; set; }
    }
}
