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
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;

namespace ProjetFinalEchAppServer.Controllers
{
    public class TripsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Trips
        public IQueryable<TripDTO> GetTrips()
        {
            //Get logged user infos
            //string id = User.Identity.GetUserId();
            //ApplicationUser user = db.Users.Include(u => u.Trips).Where(u => u.Id == id).FirstOrDefault();
            List<Trip> tripList = db.Trips.ToList();
            var trips = from t in db.Trips
                        select new TripDTO()
                        {
                            Id = t.Id,
                            Title = t.Title,
                            BudgetLimit = t.BudgetLimit,
                            StartDate = t.StartDate,
                            EndDate = t.EndDate,
                            User = t.User.UserName
                        };
            //Return all trips
            return trips;
            //Return logged user trips...
            //return trips.Where(x => x.User == user.Email);
        }

        // GET: api/GetTripPins/5
        [Route("api/Trips/GetTripPins/{id}/")]
        public IQueryable<PinDTO> GetTripPins(int id)
        {
            List<Pin> tripPins = new List<Pin>();
            Trip trip = db.Trips.Find(id);
            foreach (Day currentDay in trip.Days)
            {
                tripPins.Add(currentDay.Pins.OrderBy(x => x.StartDate).First());
            }
            var trips = from p in tripPins
                        select new PinDTO()
                        {
                            Id = p.Id,
                            StartDate = p.StartDate,
                            EndDate = p.EndDate,
                            Longitude = p.Longitude,
                            Latitude = p.Latitude,
                            CashSpent = p.CashSpent,
                            TransportType = p.TransportType,
                            Day = p.Day.Title
                        };
            return trips.AsQueryable();
        }

        // GET: api/Trips/5
        [ResponseType(typeof(Trip))]
        public IHttpActionResult GetTrip(int id)
        {
            Trip trip = db.Trips.Find(id);
            if (trip == null)
            {
                return NotFound();
            }

            return Ok(trip);
        }

        // PUT: api/Trips/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTrip(int id, Trip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != trip.Id)
            {
                return BadRequest();
            }

            db.Entry(trip).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TripExists(id))
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

        // POST: api/Trips
        [ResponseType(typeof(Trip))]
        public IHttpActionResult PostTrip(Trip trip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Trips.Add(trip);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = trip.Id }, trip);
        }

        // DELETE: api/Trips/5
        [ResponseType(typeof(Trip))]
        public IHttpActionResult DeleteTrip(int id)
        {
            Trip trip = db.Trips.Find(id);
            if (trip == null)
            {
                return NotFound();
            }

            db.Trips.Remove(trip);
            db.SaveChanges();

            return Ok(trip);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TripExists(int id)
        {
            return db.Trips.Count(e => e.Id == id) > 0;
        }
    }
}