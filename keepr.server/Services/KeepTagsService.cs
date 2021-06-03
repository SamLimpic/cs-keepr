using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using keepr.server.Interfaces;

namespace keepr.server.Services
{
    public class KeepTagsService
    {
        private readonly KeepTagsRepository _repo;

        public KeepTagsService(KeepTagsRepository repo)
        {
            _repo = repo;
        }



        public KeepTagDTO GetById(int id)
        {
            return _repo.GetById(id);
        }



        public IEnumerable<KeepTagDTO> Create(IEnumerable<KeepTagDTO> tags)
        {
            List<KeepTagDTO> newTags = new List<KeepTagDTO>();
            foreach (var t in tags)
            {
                newTags.Add(_repo.Create(t));
            }
            return newTags;
        }
    }
}