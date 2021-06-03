using System;
using System.ComponentModel.DataAnnotations;
using keepr.server.Interfaces;

namespace keepr.server.Models
{
    public class KeepTagDTO
    {
        public int Id { get; set; }

        public int KeepId { get; set; }

        public int TagId { get; set; }
    }

    public class KeepTagView : Tag
    {

        public int KeepTagId { get; set; }

        public int KeepId { get; set; }

        public int TagId { get; set; }
    }
}