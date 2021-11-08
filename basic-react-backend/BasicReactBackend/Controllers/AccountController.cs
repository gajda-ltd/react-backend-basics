using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BasicReactBackend.Interfaces;
using BasicReactBackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BasicReactBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly ILogger<AccountController> logger;
        private readonly IAccountService service;

        public AccountController(ILogger<AccountController> logger, IAccountService service)
        {
            this.logger = logger;
            this.service = service;
        }
        

        [HttpPost]
        public IActionResult Post(RegisterForm form)
        {
            this.logger.LogInformation(form.ToString());
            this.service.Create(form.Login, form.Password);
            return Ok();
        }

        [HttpGet]
        public List<string> Get()
        {
            return this.service.GetUsers();
        }
    }
}
