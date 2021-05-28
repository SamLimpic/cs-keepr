using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace keepr.server.Services
{
    public class VaultsService : IService<Vault>
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



        public Vault GetById(int id)
        {
            Vault vault = _repo.GetById(id);
            if (vault == null)
            {
                throw new Exception("Invalid Id");
            }
            return vault;
        }



        internal IEnumerable<Vault> GetVaultsByProfileId(string id)
        {
            return _repo.GetVaultsByProfileId(id);
        }



        internal IEnumerable<VaultKeepView> GetVaultKeeps(int id, Account userInfo)
        {
            Vault vault = _repo.GetById(id);
            if (vault.IsPrivate == true && vault.CreatorId != userInfo.Id)
            {
                throw new Exception("That vault is private!");
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
            Vault vault = GetById(id);
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