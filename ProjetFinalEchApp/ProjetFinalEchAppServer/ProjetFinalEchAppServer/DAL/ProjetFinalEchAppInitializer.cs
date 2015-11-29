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
            //Add stuff
        }
    }
}