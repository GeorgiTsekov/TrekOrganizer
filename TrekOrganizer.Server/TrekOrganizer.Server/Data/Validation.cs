namespace TrekOrganizer.Server.Data
{
    public class Validation
    {
        public class Trek
        {
            public const int MaxDescriptionLength = 2000;
            public const int MaxLocationLength = 50;
        }

        public class User
        {
            public const int MaxNameLength = 40;
            public const int MaxBiographyLength = 150;
        }
    }
}
