namespace TrekOrganizer.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using static Data.Validation.Trek;
    public class Trek
    {
        public int Id { get; set; }

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

        public int Likes { get; } = 0;

        public int CategoryId { get; set; }

        public virtual Category Category { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual User User { get; set; }


    }
}
