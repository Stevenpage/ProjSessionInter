using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ProjetFinalEchAppServer.Models;

namespace ProjetFinalEchAppServer.Controllers
{
    public class PeriodsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Periods
        public IQueryable<Period> GetPeriods()
        {
            return db.Periods;
        }

        // GET: api/Periods/5
        [ResponseType(typeof(Period))]
        public IHttpActionResult GetPeriod(int id)
        {
            Period period = db.Periods.Find(id);
            if (period == null)
            {
                return NotFound();
            }

            return Ok(period);
        }

        // PUT: api/Periods/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPeriod(int id, Period period)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != period.Id)
            {
                return BadRequest();
            }

            db.Entry(period).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PeriodExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Periods
        [ResponseType(typeof(Period))]
        public IHttpActionResult PostPeriod(Period period)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Periods.Add(period);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = period.Id }, period);
        }

        // DELETE: api/Periods/5
        [ResponseType(typeof(Period))]
        public IHttpActionResult DeletePeriod(int id)
        {
            Period period = db.Periods.Find(id);
            if (period == null)
            {
                return NotFound();
            }

            db.Periods.Remove(period);
            db.SaveChanges();

            return Ok(period);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PeriodExists(int id)
        {
            return db.Periods.Count(e => e.Id == id) > 0;
        }
    }
}