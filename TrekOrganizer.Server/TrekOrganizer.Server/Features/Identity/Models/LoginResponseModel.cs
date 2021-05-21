using System.ComponentModel.DataAnnotations;
using TrekOrganizer.Server.Data.Models;

namespace TrekOrganizer.Server.Features.Identity.Models
{
    public class LoginResponseModel
    {
        public string Token { get; set; }

        public UserDetailsServiceModel User { get; set; }
    }   
}
