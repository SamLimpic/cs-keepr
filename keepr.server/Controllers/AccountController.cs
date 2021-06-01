using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CodeWorks.Auth0Provider;
using keepr.server.Models;
using keepr.server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace keepr.server.Controllers
{
    [ApiController]
    [Route("[controller]")]

    [Authorize]
    // STUB[epic=Auth] Adds Authguard to all routes on the whole controller

    public class AccountController : ControllerBase
    {
        private readonly AccountsService _service;

        private readonly VaultsService _vService;


        public AccountController(AccountsService service, VaultsService vService)
        {
            _service = service;
            _vService = vService;
        }

        [HttpGet]

        public async Task<ActionResult<Account>> Get()
        // NOTE asyncronous actions must include "Task" before ActionResult
        {
            // STUB[epic=Auth] Replaces req.userinfo
            // NOTE HOW TO GET ACTIVE USERS
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Account currentUser = _service.GetOrCreateAccount(userInfo);
                return Ok(currentUser);
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<Account>> Update([FromBody] Account edit)
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Account currentUser = _service.GetOrCreateAccount(userInfo);
                edit.Email = currentUser.Email;
                edit.Id = currentUser.Id;
                Account update = _service.Edit(edit, currentUser);
                return Ok(update);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("vaults")]
        public async Task<ActionResult<IEnumerable<Vault>>> GetMyVaults()
        {
            try
            {
                Account userInfo = await HttpContext.GetUserInfoAsync<Account>();
                Account currentUser = _service.GetOrCreateAccount(userInfo);
                IEnumerable<Vault> vaults = _vService.GetMyVaults(currentUser.Id);
                return Ok(vaults);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}