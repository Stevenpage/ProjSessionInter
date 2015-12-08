using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetFinalEchAppServer.Models
{
    public class TripDTO
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public double BudgetLimit { get; set; }

        public virtual String User { get; set; }

        public virtual List<Day> Days { get; set; }
    }
}