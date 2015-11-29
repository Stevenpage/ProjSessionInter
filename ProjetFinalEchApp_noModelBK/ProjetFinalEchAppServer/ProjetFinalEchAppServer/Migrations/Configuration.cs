namespace ProjetFinalEchAppServer.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ProjetFinalEchAppServer.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ProjetFinalEchAppServer.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.
        }
    }
}
