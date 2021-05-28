using System;

namespace keepr.server.Models
{
    public class Account : Profile
    {
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }



        public string Email { get; set; }

    }
}