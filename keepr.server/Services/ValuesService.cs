using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;

namespace keepr.server.Services
{
    public class ValuesService : IService<Value>
    {
        private readonly ValuesRepository _repo;

        public ValuesService(ValuesRepository repo)
        {
            _repo = repo;
        }



        public List<Value> GetAll()
        {
            return _repo.GetAll();
        }



        public Value GetById(int id)
        {
            return _repo.GetById(id);
        }



        public Value Create(Value data)
        {
            return _repo.Create(data);
        }



        public Value Update(Value edit, string creatorId)
        {
            Value original = _repo.GetById(edit.Id);
            original.Name = edit.Name.Length > 0 ? edit.Name : original.Name;
            if (original == null)
            {
                throw new Exception("Invalid Id");
            }
            if (edit.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Value");
            }
            return _repo.Update(original);
        }



        public void Delete(int id, string creatorId)
        {
            Value value = GetById(id);
            if (value == null)
            {
                throw new Exception("Invalid Id");
            }
            if (value.CreatorId != creatorId)
            {
                throw new Exception("You cannot delete another users Value");
            }
            _repo.Delete(id);
        }
    }
}