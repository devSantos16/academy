using AwesomeDevEvents.Entities;
using AwesomeDevEvents.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AwesomeDevEvents.Controllers
{
    [Route("api/dev-events")]
    [ApiController]
    public class DevEventsController : ControllerBase
    {
        private readonly DevEventsDbContext _context;

        public DevEventsController(DevEventsDbContext context) 
        {
            this._context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var devEvents = this._context.Events.ToList();
            return Ok(devEvents);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            if (TryGetDevEventById(id, out DevEvents devEvent) == false)
            {
                return NotFound();
            }

            return Ok(devEvent);
        }

        [HttpPost()]
        public IActionResult Post(DevEvents devEvent)
        {
            this._context.Events.Add(devEvent);
            return CreatedAtAction(nameof(GetById), new {id = devEvent.Id}, devEvent);
        }

        [HttpPut("{id}")]
        public IActionResult Update(Guid id, DevEvents input)
        {
            if (TryGetDevEventById(id, out DevEvents devEvent) == false)
            {
                return NotFound();
            }

            devEvent.Update(input.Title, input.StartDate, input.EndDate);
            return NoContent();
        }

        [HttpDelete()]
        public IActionResult Delete(Guid id)
        {
            if (TryGetDevEventById(id, out DevEvents devEvent) == false)
            {
                return NotFound();
            }

            this._context.Events.Remove(devEvent);
            return NoContent();
        }

        [HttpPost("{id}/speakers")]
        public IActionResult PostSpeaker(Guid id, DevEventsSpeaker speaker)
        {
            if (TryGetDevEventById(id, out DevEvents devEvent) == false)
            {
                return NotFound();
            }

            devEvent.Speakers.Add(speaker);
            return CreatedAtAction(nameof(GetById), new { id = devEvent.Id }, devEvent);
        }


        private bool TryGetDevEventById(Guid id, out DevEvents devEvent)
        {
            devEvent = this._context.Events.SingleOrDefault(x => x.Id == id);
            return devEvent != null;
        }
    }
}
