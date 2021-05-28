using System;
using System.ComponentModel.DataAnnotations;
using keepr.server.Interfaces;

namespace keepr.server.Models
{
    public class VaultKeepDTO
    {
        public int Id { get; set; }

        public string CreatorId { get; set; }

        public int VaultId { get; set; }

        public int KeepId { get; set; }

    }

    public class VaultKeepView : Keep
    {

        public int VaultKeepId { get; set; }

        public int VaultId { get; set; }

        public int KeepId { get; set; }

    }
}