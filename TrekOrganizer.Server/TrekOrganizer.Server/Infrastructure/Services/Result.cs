namespace TrekOrganizer.Server.Infrastructure.Services
{
    public class Result
    {
        public bool Succeeded { get; private set; }

        public bool Failure => !this.Succeeded;

        public string Error { get; private set; }

        public static implicit operator Result(bool succeeded)
        {
            var result = new Result { Succeeded = succeeded };

            return result;
        }

        public static implicit operator Result(string error)
        {
            var result = new Result
            {
                Succeeded = false,
                Error = error
            };

            return result;
        }
    }
}
