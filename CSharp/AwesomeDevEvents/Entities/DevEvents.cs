namespace AwesomeDevEvents.Entities
{
    public class DevEvents
    {

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate  { get; set; }
        public DateTime EndDate { get; set; }
        public List<Speaker> Speakers { get; set; }


        public void Update(string title, string description, DateTime StartDate, DateTime EndDate)
        {
            this.Title = title;
            this.Description = description;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
        }
    }
}
