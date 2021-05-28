using System;
using System.Collections.Generic;
using keepr.server.Models;
using keepr.server.Services;
using Microsoft.AspNetCore.Mvc;

namespace keepr.server.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ProfilesController : ControllerBase
    {
        private readonly AccountsService _service;
        private readonly VaultsService _vService;
        private readonly KeepsService _kService;

        public ProfilesController(AccountsService service, VaultsService vService, KeepsService kService)
        {
            _service = service;
            _vService = vService;
            _kService = kService;
        }

        [HttpGet("{id}")]
        public ActionResult<Profile> GetProfileById(string id)
        {
            try
            {
                Profile profile = _service.GetProfileById(id);
                return Ok(profile);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}/vaults")]
        public ActionResult<IEnumerable<Vault>> GetVaultsByProfileId(string id)
        {
            try
            {
                IEnumerable<Vault> vaults = _vService.GetVaultsByProfileId(id);
                return Ok(vaults);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }



        [HttpGet("{id}/keeps")]
        public ActionResult<IEnumerable<Keep>> GetKeepsByProfileId(string id)
        {
            try
            {
                IEnumerable<Keep> keeps = _kService.GetKeepsByProfileId(id);
                return Ok(keeps);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}