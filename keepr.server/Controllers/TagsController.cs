using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keepr.server.Interfaces;
using keepr.server.Models;
using keepr.server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace keepr.server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class TagsController : ControllerBase
    {
        private readonly TagsService _service;

        public TagsController(TagsService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Tag>> GetAll()
        {
            try
            {
                IEnumerable<Tag> tags = _service.GetAll();
                return Ok(tags);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}")]
        public ActionResult<Tag> GetById(int id)
        {
            try
            {
                Tag tag = _service.GetById(id);
                return Ok(tag);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}/keeps")]
        public ActionResult<IEnumerable<Keep>> GetKeepsByTag(int id)
        {
            try
            {
                IEnumerable<Keep> keeps = _service.GetKeepsByTag(id);
                return Ok(keeps);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPost]
        [Authorize]
        public ActionResult<IEnumerable<Tag>> Create([FromBody] IEnumerable<Tag> tags)
        {
            try
            {
                IEnumerable<Tag> newTags = _service.Create(tags);
                return Ok(newTags);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}