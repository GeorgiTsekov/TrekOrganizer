using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrekOrganizer.Data;
using TrekOrganizer.Models;

namespace TrekOrganizer.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TreksControllers : ControllerBase
    {
        private readonly ApplicationDbContext db;

        public TreksControllers(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpGet]
        public IEnumerable<Trek> GetAll()
        {
            return db.Treks.ToList();
        }
    }
}
