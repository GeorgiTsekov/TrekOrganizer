namespace TrekOrganizer.Server.Features.Identity.Models
{
    using System.ComponentModel.DataAnnotations;

    public class UserDetailsServiceModel
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Email { get; set; }
    }
}
