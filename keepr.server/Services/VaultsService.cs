using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Linq;

namespace keepr.server.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;

        private readonly VaultKeepsRepository _vkRepo;

        public VaultsService(VaultsRepository repo, VaultKeepsRepository vkRepo)
        {
            _repo = repo;
            _vkRepo = vkRepo;
        }



        public IEnumerable<Vault> GetAll()
        {
            return _repo.GetAll();
        }



        public Vault GetById(int id, string userId)
        {
            Vault vault = _repo.GetById(id);
            if (vault == null)
            {
                throw new Exception("Invalid Id");
            }
            if (vault.CreatorId != userId && vault.IsPrivate)
            {
                throw new Exception("That vault is Private!");
            }
            return vault;
        }



        internal IEnumerable<Vault> GetVaultsByProfileId(string id, string userId)
        {
            IEnumerable<Vault> vaults = _repo.GetVaultsByProfileId(id);
            if (id == userId)
            {
                return vaults;
            }
            IEnumerable<Vault> query = from v in vaults
                                       where !v.IsPrivate
                                       select v;
            return query;
        }



        internal IEnumerable<VaultKeepView> GetVaultKeeps(int id, string userId)
        {
            Vault vault = _repo.GetById(id);
            if (vault.CreatorId != userId && vault.IsPrivate)
            {
                throw new Exception("You can't access Keeps in a Private Vault!");
            }
            return _vkRepo.GetVaultKeeps(id);
        }



        public Vault Create(Vault body)
        {
            return _repo.Create(body);
        }



        public Vault Update(Vault edit, string creatorId)
        {
            Vault original = _repo.GetById(edit.Id);
            original.Name = edit.Name.Length > 0 ? edit.Name : original.Name;
            original.Description = edit.Description.Length > 0 ? edit.Description : original.Description;
            original.Img = edit.Img.Length > 0 ? edit.Img : original.Img;
            if (original == null)
            {
                throw new Exception("Invalid Id");
            }
            if (original.CreatorId != creatorId)
            {
                throw new Exception("You cannot edit another users Vault");
            }
            return _repo.Update(original);
        }



        public void Delete(int id, string creatorId)
        {
            Vault vault = GetById(id, creatorId);
            if (vault == null)
            {
                throw new Exception("Invalid Id");
            }
            if (vault.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Vault");
            }
            _repo.Delete(id);
        }
    }
}