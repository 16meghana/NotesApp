using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotesApp.Data;
using NotesApp.Dto;
using NotesApp.Models;

namespace NotesApp.Controllers
{
    [Route("api/notes")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesDbContext _context;

        public NotesController(NotesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetNotes()
        {
            var notes = _context.Notes.ToList();
            return Ok(notes);
        }

        [HttpPost]
        public IActionResult AddNote([FromBody] NotesDto noteDto)
        {
            var user = _context.Users.FirstOrDefault(u => u.Username == "admin");  // Example: get an existing user
            if (user == null)
            {
                return BadRequest("User not found.");
            }

            var note = new Note
            {
                Title = noteDto.Title,
                Content = noteDto.Content,
                UserId = user.Id  // Reference the valid UserId
            };

            _context.Notes.Add(note);
            _context.SaveChanges();
            return Ok(note);
        }

    }
}
