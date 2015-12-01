using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetFinalEchAppServer.Models
{
    public class Pin
    {
        public int Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public double Longitude { get; set; }

        public double Latitude { get; set; }

        public double CashSpent { get; set; }

        public string TransportType { get; set; }

        public virtual Day Period { get; set; }
    }
}