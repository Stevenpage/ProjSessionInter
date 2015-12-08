﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetFinalEchAppServer.Models
{
    public class Day
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public double BudgetLimit { get; set; }

        public virtual Trip Trip { get; set; }

        public virtual List<Pin> Pins { get; set; }
    }
}