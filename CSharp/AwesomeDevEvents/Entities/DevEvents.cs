namespace AwesomeDevEvents.Entities
{
    public class DevEvents
    {
        public DevEvents() 
        {
            this.Speakers = new List<DevEventsSpeaker>();
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime StartDate  { get; set; }
        public DateTime EndDate { get; set; }
        public List<DevEventsSpeaker> Speakers { get; set; }


        public void Update(string title, DateTime StartDate, DateTime EndDate)
        {
            this.Title = title;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
        }
    }
}
