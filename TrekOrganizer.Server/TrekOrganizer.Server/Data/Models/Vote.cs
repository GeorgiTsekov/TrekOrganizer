namespace TrekOrganizer.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Vote
    {
        [Key]
        public int Id { get; set; }

        //public int TrekId { get; set; }

        //public virtual Trek Trek { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual User User { get; set; }

        public bool Like { get; set; }
    }
}
