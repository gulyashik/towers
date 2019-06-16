using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Project.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Indicator>> Get()
        {
            return new List<Indicator>{
                new Indicator {
                    Id = "1",
                    Title = "Первый  фв фвыфвыф вфывф вфыыфаыаыфа ываываывавапвпав авпвыавыаываыв аываываываываыва",
                    Value = 200000,
                    MinValue = 0,
                    MaxValue = 400000
                },
                new Indicator {
                    Id = "2",
                    Title = "Второй",
                    Value = 250,
                    MinValue = 0,
                    MaxValue = 1000
                },
                new Indicator {
                    Id = "3",
                    Title = "Третий",
                    Value = 1200,
                    MinValue = 100,
                    MaxValue = 2000
                },
                new Indicator {
                    Id = "4",
                    Title = "Четвертый",
                    Value = 10,
                    MinValue = 0,
                    MaxValue = 500
                },
                new Indicator {
                    Id = "5",
                    Title = "Пятый",
                    Value = 600478,
                    MinValue = 0,
                    MaxValue = 550
                },
                new Indicator {
                    Id = "6",
                    Title = "Шестой",
                    Value = 1345,
                    MinValue = 0,
                    MaxValue = 2000
                },
                new Indicator {
                    Id = "7",
                    Title = "Седьмой",
                    Value = 578,
                    MinValue = 0,
                    MaxValue = 3000
                },
                new Indicator {
                    Id = "8",
                    Title = "Восьмой",
                    Value = 400,
                    MinValue = 0,
                    MaxValue = 200
                },
                new Indicator {
                    Id = "9",
                    Title = "Девятый",
                    Value = 2000,
                    MinValue = 0,
                    MaxValue = 10000
                },
                new Indicator {
                    Id = "10",
                    Title = "Десятый",
                    Value = 599,
                    MinValue = 0,
                    MaxValue = 1000
                }
            };
        }

        public class Indicator {
            public string Id {get; set;}
            public string Title {get; set;}
            public long Value {get; set;}
            public int MinValue {get; set;}
            public int MaxValue {get; set;}

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
