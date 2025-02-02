using NotesApp.Models;

namespace NotesApp.Data
{
    public static class DataSeeder
    {
        public static void Seed(NotesDbContext context)
        {
            // Seed Users if they don't exist
            if (!context.Users.Any())
            {
                var user = new User
                {
                    Username = "admin",
                    PasswordHash = BCrypt.Net.BCrypt.HashPassword("adminpassword")
                };
                context.Users.Add(user);
                context.SaveChanges();
            }

            // Seed Notes if they don't exist
            if (!context.Notes.Any())
            {
                var note = new Note
                {
                    Title = "Sample Note",
                    Content = "This is a sample note.",
                    UserId = 1  // Make sure UserId exists in Users table
                };
                context.Notes.Add(note);
                context.SaveChanges();
            }
        }
    }
}
