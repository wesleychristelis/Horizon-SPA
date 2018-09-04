using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            return Ok(new string[] { "value1", "value2" });
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

                // POST api/values
        [HttpPost("logtest")]
        public ActionResult<string> LogTest([FromBody] string value)
        {
            Console.WriteLine("**** hit the api ****" + value);
            return Ok("API hit:::" + value);
            //return BadRequest("Invalid or Bad Request");
        }
    }
}
