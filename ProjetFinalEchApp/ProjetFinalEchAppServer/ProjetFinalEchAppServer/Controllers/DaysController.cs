﻿using System;
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
    public class DaysController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Days
        public IQueryable<Day> GetDays()
        {
            return db.Days;
        }


        // GET: api/GetDayPins/5
        [Route("api/Days/GetDayPins/{id}/")]
        public IQueryable<Pin> GetDayPins(int id)
        {
            return db.Days.Find(id).Pins.OrderBy(x => x.StartDate).AsQueryable();
        }

        // GET: api/Days/5
        [ResponseType(typeof(Day))]
        public IHttpActionResult GetDay(int id)
        {
            Day day = db.Days.Find(id);
            if (day == null)
            {
                return NotFound();
            }

            return Ok(day);
        }

        // PUT: api/Days/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDay(int id, Day day)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != day.Id)
            {
                return BadRequest();
            }

            db.Entry(day).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DayExists(id))
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

        // POST: api/Days
        [ResponseType(typeof(Day))]
        public IHttpActionResult PostDay(Day day)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Days.Add(day);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = day.Id }, day);
        }

        // DELETE: api/Days/5
        [ResponseType(typeof(Day))]
        public IHttpActionResult DeleteDay(int id)
        {
            Day day = db.Days.Find(id);
            if (day == null)
            {
                return NotFound();
            }

            db.Days.Remove(day);
            db.SaveChanges();

            return Ok(day);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DayExists(int id)
        {
            return db.Days.Count(e => e.Id == id) > 0;
        }
    }
}