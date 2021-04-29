namespace TrekOrganizer.Server.Infrastructure.Services
{
    using System;

    public interface ICurrentUserService
    {
        string GetUserName();

        string GetId();
    }
}
