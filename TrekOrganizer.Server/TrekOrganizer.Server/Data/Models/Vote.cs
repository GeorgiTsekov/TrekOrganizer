namespace TrekOrganizer.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;
    using Base;

    public class Vote : Entity
    {
        [Key]
        public int Id { get; set; }

        public int TrekId { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual User User { get; set; }

        public bool IsLiked { get; set; }
    }
}
