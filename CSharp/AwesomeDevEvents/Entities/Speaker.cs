namespace AwesomeDevEvents.Entities
{
    public class Speaker
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string TalkTitle { get; set; }
        public string TalkDescription { get; set; }
        public int LinkedInProfile { get; set; }
        public Guid DevEventId { get; set; }
    }
}