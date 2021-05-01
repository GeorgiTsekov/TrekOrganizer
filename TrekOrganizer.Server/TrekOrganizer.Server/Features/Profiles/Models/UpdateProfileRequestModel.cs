namespace TrekOrganizer.Server.Features.Profiles.Models
{
    using System.ComponentModel.DataAnnotations;
    using Data.Models;
    using static Data.Validation.User;

    public class UpdateProfileRequestModel
    {
        public string UserName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [MaxLength(MaxNameLength)]
        public string Name { get; set; }

        public string MainPhotoUrl { get; set; }

        public string WebSite { get; set; }

        [MaxLength(MaxBiographyLength)]
        public string Biography { get; set; }

        public Gender Gender { get; set; }

        public bool IsPrivate { get; set; }
    }
}
