namespace TrekOrganizer.Server.Infrastructure.Services
{
    public interface ICurrentUserService
    {
        string GetEmail();

        string GetId();
    }
}
