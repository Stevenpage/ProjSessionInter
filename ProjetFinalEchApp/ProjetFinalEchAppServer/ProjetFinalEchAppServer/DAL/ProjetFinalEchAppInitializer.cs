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
    public class ProjetFinalEchAppInitializer : DropCreateDatabaseIfModelChanges<ApplicationDbContext>
    {
        protected override void Seed(ApplicationDbContext context)
        {
            base.Seed(context);
            //Main user init.
            //UserManager<ApplicationUser> UserManager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(context));
            //ApplicationUser mainUser = new ApplicationUser();
            //mainUser.UserName = "thedev";
            //UserManager.Create(mainUser, "aspasp");
            //Trip t = new Trip();
            //t.BudgetLimit = 1000;
            //t.EndDate = DateTime.Now.AddDays(7);
            //t.StartDate = DateTime.Now;
            //t.

            //Day d1 = new Day();
            //d1.
            //context.SaveChanges();
        }
    }
}