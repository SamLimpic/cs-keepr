using System;
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

        public AccountController(AccountsService service)
        {
            _service = service;
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
    }
}