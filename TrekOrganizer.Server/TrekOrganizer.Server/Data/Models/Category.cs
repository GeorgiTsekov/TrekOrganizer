namespace TrekOrganizer.Server.Data.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Category
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        public IEnumerable<Trek> Treks { get; } = new HashSet<Trek>();
    }
}