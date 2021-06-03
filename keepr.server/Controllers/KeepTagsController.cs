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
    public class KeepTagsController : ControllerBase
    {
        private readonly KeepTagsService _service;

        private readonly TagsService _tService;

        public KeepTagsController(KeepTagsService service, TagsService tService)
        {
            _service = service;
            _tService = tService;
        }



        [HttpGet("{id}")]
        public ActionResult<KeepTagDTO> GetById(int id)
        {
            try
            {
                KeepTagDTO keepTag = _service.GetById(id);
                return Ok(keepTag);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPost]
        [Authorize]
        public ActionResult<IEnumerable<KeepTagDTO>> Create([FromBody] IEnumerable<KeepTagDTO> tags)
        {
            try
            {
                IEnumerable<KeepTagDTO> newTags = _service.Create(tags);
                return Ok(newTags);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}