namespace TrekOrganizer.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Follow
    {
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        public virtual User User { get; set; }

        [Required]
        public string FollowerId { get; set; }

        public virtual User Follower { get; set; }

        public bool IsApproved { get; set; }
    }
}
