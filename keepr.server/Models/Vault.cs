using System;
using System.ComponentModel.DataAnnotations;
using keepr.server.Interfaces;

namespace keepr.server.Models
{
    public class Vault : IItem
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }



        public Profile Creator { get; set; }

        public string CreatorId { get; set; }

        [Required]
        [MinLength(1)]
        public string Name { get; set; }

        [Required]
        [MinLength(1)]
        public string Description { get; set; }

        [Required]
        public bool IsPrivate { get; set; } = false;

        public string Img { get; set; }
    }
}