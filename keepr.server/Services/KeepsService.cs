using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;

namespace keepr.server.Services
{
    public class KeepsService : IService<Keep>
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }



        public List<Keep> GetAll()
        {
            return _repo.GetAll();
        }



        public Keep GetById(int id)
        {
            return _repo.GetById(id);
        }



        public Keep Create(Keep body)
        {
            return _repo.Create(body);
        }



        public Keep Update(Keep edit, string creatorId)
        {
            Keep original = _repo.GetById(edit.Id);
            original.Name = edit.Name.Length > 0 ? edit.Name : original.Name;
            original.Description = edit.Description.Length > 0 ? edit.Description : original.Description;
            original.Img = edit.Img.Length > 0 ? edit.Img : original.Img;
            original.Views = edit.Views > 0 ? edit.Views : original.Views;
            original.Shares = edit.Shares > 0 ? edit.Shares : original.Shares;
            original.Keeps = edit.Keeps > 0 ? edit.Keeps : original.Keeps;
            if (original == null)
            {
                throw new Exception("Invalid Id");
            }
            if (edit.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Keep");
            }
            return _repo.Update(original);
        }



        public void Delete(int id, string creatorId)
        {
            Keep keep = GetById(id);
            if (keep == null)
            {
                throw new Exception("Invalid Id");
            }
            if (keep.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Keep");
            }
            _repo.Delete(id);
        }
    }
}