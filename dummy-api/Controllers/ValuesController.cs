using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dummy_api.models;
using Microsoft.AspNetCore.Mvc;

namespace dummy_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return Ok(new string[] { "wesley", "brenden (all 6 inches)" });
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return NotFound("Not Found");
        }

        // GET api/values/5
        [HttpGet("{value}")]
        public ActionResult<string> Get(string value)
        {
            return Unauthorized();
        }

        // POST api/values
        [HttpPost]
        public ActionResult<string> Post([FromBody] string value)
        {
            return BadRequest("Invalid or Bad Request");
        }

        [HttpPost("logtestcontract")]
        public ActionResult<string> LogTest([FromBody] LogEntryDto value)
        {
            Console.WriteLine("**** hit the api ****" + value.Message);
            return Ok("API hit:::" + value.Message);

            //return BadRequest("Invalid or Bad Request");
        }
    }
}
