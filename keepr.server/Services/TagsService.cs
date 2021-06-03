using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Repositories;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace keepr.server.Services
{
    public class TagsService
    {
        private readonly TagsRepository _repo;

        private readonly KeepTagsRepository _ktRepo;

        public TagsService(TagsRepository repo, KeepTagsRepository ktRepo)
        {
            _repo = repo;
            _ktRepo = ktRepo;
        }



        public IEnumerable<Tag> GetAll()
        {
            return _repo.GetAll();
        }



        public Tag GetById(int id)
        {
            Tag tag = _repo.GetById(id);
            if (tag == null)
            {
                throw new Exception("Invalid Id");
            }
            return tag;
        }



        internal IEnumerable<Keep> GetKeepsByTag(int id)
        {
            return _ktRepo.GetKeepsByTag(id);
        }



        public IEnumerable<Tag> Create([FromQuery] IEnumerable<Tag> tags)
        {
            List<Tag> newTags = new List<Tag>();
            foreach (var t in tags)
            {
                newTags.Add(_repo.Create(t));
            }
            return newTags;
        }
    }
}