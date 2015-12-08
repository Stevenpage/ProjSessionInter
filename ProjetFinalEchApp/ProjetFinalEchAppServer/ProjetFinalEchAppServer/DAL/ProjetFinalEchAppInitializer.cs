using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using ProjetFinalEchAppServer.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ProjetFinalEchAppServer.DAL
{
    public class ProjetFinalEchAppInitializer : DropCreateDatabaseAlways<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {   
            //Main user init.
            UserManager<ApplicationUser> UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            ApplicationUser mainUser = new ApplicationUser();
            mainUser.UserName = "thedev";
            UserManager.Create(mainUser, "aspasp");

            /*
            double budgetLimit = 1000;
            Trip t = new Trip();
            t.BudgetLimit = budgetLimit;
            t.EndDate = DateTime.Now.AddDays(7);
            t.StartDate = DateTime.Now;
            t.User = mainUser;

            Day d1 = new Day();
            d1.BudgetLimit = budgetLimit / 2;
            d1.StartDate = DateTime.Now;
            d1.EndDate = DateTime.Now.AddDays(3);
            Pin p01 = new Pin();
            p01.StartDate = DateTime.Now;
            p01.EndDate = DateTime.Now.AddDays(1);
            p01.CashSpent = 250;
            p01.Latitude = 0;
            p01.Longitude = 0;
            Pin p02 = new Pin();
            p02.StartDate = DateTime.Now.AddDays(1);
            p02.EndDate = DateTime.Now.AddDays(3);
            p01.CashSpent = 250;
            p01.Latitude = 25;
            p01.Longitude = 25;
            d1.Pins = new List<Pin>();
            d1.Pins.Add(p01);
            d1.Pins.Add(p02);


            Day d2 = new Day();
            d2.BudgetLimit = budgetLimit / 2;
            d2.StartDate = DateTime.Now.AddDays(3);
            d2.EndDate = DateTime.Now.AddDays(7);
            Pin p03 = new Pin();
            p03.StartDate = DateTime.Now.AddDays(3);
            p03.EndDate = DateTime.Now.AddDays(5);
            p03.CashSpent = 250;
            p03.Latitude = 0;
            p03.Longitude = 0;
            Pin p04 = new Pin();
            p04.StartDate = DateTime.Now.AddDays(5);
            p04.EndDate = DateTime.Now.AddDays(7);
            p04.CashSpent = 250;
            p04.Latitude = 25;
            p01.Longitude = 25;
            d2.Pins = new List<Pin>();
            d2.Pins.Add(p01);
            d2.Pins.Add(p02);

            t.Days = new List<Day>();
            t.Days.Add(d1);
            t.Days.Add(d2);

            context.Trips.Add(t);
            context.SaveChanges();
            base.Seed(context);
            */
        }
    }
}