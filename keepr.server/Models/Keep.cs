using System;
using System.ComponentModel.DataAnnotations;
using keepr.server.Interfaces;

namespace keepr.server.Models
{
    public class Keep : IItem
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
        public string Img { get; set; } = "http://www.fillmurray.com/300/300";

        [Required]
        public int Views { get; set; } = 0;

        [Required]
        public int Shares { get; set; } = 0;

        [Required]
        public int Keeps { get; set; } = 0;
    }
}