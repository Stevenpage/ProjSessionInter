using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ProjetFinalEchAppServer.Models
{
    public class Trip
    {
        public int Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public double BudgetLimit { get; set; }

        public bool Shared { get; set; }

        [InverseProperty("Trips")]
        public virtual ApplicationUser User { get; set; }

        public virtual List<Day> Periods { get; set; }
    }
}