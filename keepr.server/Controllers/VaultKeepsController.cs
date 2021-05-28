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
    public class VaultKeepsController : ControllerBase
    {
        private readonly VaultKeepsService _service;

        public VaultKeepsController(VaultKeepsService service)
        {
            _service = service;
        }



        [HttpGet("{id}")]
        public ActionResult<VaultKeepDTO> GetById(int id)
        {
            try
            {
                VaultKeepDTO vaultKeep = _service.GetById(id);
                return Ok(vaultKeep);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPost]
        [Authorize]
        public async Task<ActionResult<VaultKeepDTO>> Create([FromBody] VaultKeepDTO body)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                body.CreatorId = userInfo.Id;
                VaultKeepDTO newVaultKeep = _service.Create(body);
                return Ok(newVaultKeep);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<VaultKeepDTO>> Update([FromBody] VaultKeepDTO edit, int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                edit.Id = id;
                VaultKeepDTO update = _service.Update(edit, userInfo.Id);
                return Ok(update);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<string>> Delete(int id)
        {
            try
            {
                // TODO[epic=Auth] Get the user info to set the creatorID
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                // safety to make sure an account exists for that user before DELETE-ing stuff.
                _service.Delete(id, userInfo.Id);
                return Ok("Successfully Deleted!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}