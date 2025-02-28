using AwesomeDevEvents.Entities;

namespace AwesomeDevEvents.Persistence
{
    public class DevEventsDbContext
    {
        public List<DevEvents> Events { get; set; }

        public DevEventsDbContext()
        {
            this.Events = new List<DevEvents>();
        }
    }
}
