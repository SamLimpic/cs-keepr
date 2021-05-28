using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;

namespace keepr.server.Services
{
    public class VaultKeepsService
    {
        private readonly VaultKeepsRepository _repo;

        private readonly KeepsService _kService;

        public VaultKeepsService(VaultKeepsRepository repo, KeepsService kService)
        {
            _repo = repo;
            _kService = kService;
        }



        public VaultKeepDTO GetById(int id)
        {
            return _repo.GetById(id);
        }



        public VaultKeepDTO Create(VaultKeepDTO body)
        {
            return _repo.Create(body);
        }



        public VaultKeepDTO Update(VaultKeepDTO edit, string creatorId)
        {
            VaultKeepDTO original = _repo.GetById(edit.Id);
            original.VaultId = edit.VaultId > 0 ? edit.VaultId : original.VaultId;
            original.KeepId = edit.KeepId > 0 ? edit.KeepId : original.KeepId;
            if (original == null)
            {
                throw new Exception("Invalid Id");
            }
            if (edit.CreatorId != creatorId)
            {
                throw new Exception("You cannot edit another users Vault");
            }
            return _repo.Update(original);
        }



        public void Delete(int id, string creatorId)
        {
            VaultKeepDTO vaultKeep = GetById(id);
            if (vaultKeep == null)
            {
                throw new Exception("Invalid Id");
            }
            if (vaultKeep.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Vault");
            }
            _kService.DecrementKeeps(vaultKeep.KeepId);
            _repo.Delete(id);
        }
    }
}