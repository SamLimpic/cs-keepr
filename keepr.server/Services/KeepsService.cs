using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;

namespace keepr.server.Services
{
    public class KeepsService
    {
        private readonly KeepsRepository _repo;

        public KeepsService(KeepsRepository repo)
        {
            _repo = repo;
        }



        public IEnumerable<Keep> GetAll()
        {
            return _repo.GetAll();
        }



        public Keep GetById(int id)
        {
            Keep keep = _repo.GetById(id);
            if (keep == null)
            {
                throw new Exception("Invalid Id");
            }
            IncrementViews(keep);
            return keep;
        }



        internal IEnumerable<Keep> GetKeepsByProfileId(string id)
        {
            return _repo.GetKeepsByProfileId(id);
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
            if (original == null)
            {
                throw new Exception("Invalid Id");
            }
            if (original.CreatorId != creatorId)
            {
                throw new Exception("You cannot edit another users Keep");
            }
            return _repo.Update(original);
        }



        public Keep IncrementViews(Keep keep)
        {
            keep.Views++;
            return _repo.UpdateCount(keep);
        }



        public Keep IncrementShares(Keep keep)
        {
            keep.Shares++;
            return _repo.UpdateCount(keep);
        }



        public Keep IncrementKeeps(int id)
        {
            Keep keep = _repo.GetById(id);
            keep.Keeps++;
            return _repo.UpdateCount(keep);
        }



        public Keep DecrementKeeps(int id)
        {
            Keep keep = _repo.GetById(id);
            keep.Keeps--;
            return _repo.UpdateCount(keep);
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