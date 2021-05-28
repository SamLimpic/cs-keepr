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
    public class VaultsController : ControllerBase
    {
        private readonly VaultsService _service;

        public VaultsController(VaultsService service)
        {
            _service = service;
        }

        [HttpGet]
        public ActionResult<List<Vault>> GetAll()
        {
            try
            {
                List<Vault> vaults = _service.GetAll();
                return Ok(vaults);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}")]
        public ActionResult<Vault> GetById(int id)
        {
            try
            {
                Vault vault = _service.GetById(id);
                return Ok(vault);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}/reagents")]
        public ActionResult<IEnumerable<VaultKeepView>> GetVaultKeeps(int id)
        {
            try
            {
                IEnumerable<VaultKeepView> reagents = _service.GetVaultKeeps(id);
                return Ok(reagents);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPost]
        [Authorize]
        public async Task<ActionResult<Vault>> Create([FromBody] Vault body)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                body.CreatorId = userInfo.Id;
                Vault newVault = _service.Create(body);
                newVault.Creator = userInfo;
                return Ok(newVault);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult<Vault>> Update([FromBody] Vault edit, int id)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                edit.Id = id;
                Vault update = _service.Update(edit, userInfo.Id);
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