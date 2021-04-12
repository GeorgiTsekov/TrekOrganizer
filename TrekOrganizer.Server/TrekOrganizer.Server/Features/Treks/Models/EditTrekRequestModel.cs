namespace TrekOrganizer.Server.Features.Treks.Models
{
    using System.ComponentModel.DataAnnotations;

    public class EditTrekRequestModel : CreateTrekRequestModel
    {
        [Required]
        public int Id { get; set; }
    }
}
