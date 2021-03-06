﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Launcher.API.Model;
using Launcher.BusinessLogic.RepositoryFactory;
using Launcher.Data.Access.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Launcher.BusinessLogic.Account.Validation.Login;
using Launcher.API.Model.Login;

namespace Launcher.API.Controllers
{
    [Route("api/[controller]")]
    public class LoginController : Controller
    {
        private IOptions<AppSettings> _appSettings;

        public LoginController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings;
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public LoginResponse Post([FromBody]LoginRequest loginRequest)
        {
            AccountValidation accountValidation = new AccountValidation(new RepositoryFactory<AccountEntity>(), _appSettings.Value.MongoConnectionString);
            
            try
            {
                var accountValidationStatus = accountValidation.ValidateAccount(loginRequest.AccountName, loginRequest.AccountPassword);
                var returnMessage = accountValidationStatus.IsValid ? $@"{accountValidationStatus.Account.AccountName} has been found" : $@"{accountValidationStatus.Account.AccountName} Not Found";
                return new LoginResponse()
                {
                    IsValid = accountValidationStatus.IsValid,
                    Message = returnMessage
                };
            }
            catch (KeyNotFoundException keyNotFound)
            {
                return new LoginResponse()
                {
                    IsValid = false,
                    Message = keyNotFound.Message
                };
            }
           
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
