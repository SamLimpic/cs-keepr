using System;
using System.ComponentModel.DataAnnotations;
using keepr.server.Interfaces;

namespace keepr.server.Models
{
    public class Tag : IItem
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }



        [Required]
        [MinLength(1)]
        public string Name { get; set; }
    }
}