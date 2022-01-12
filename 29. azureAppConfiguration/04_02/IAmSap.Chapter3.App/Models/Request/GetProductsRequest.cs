using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IAmSap.Chapter3.App.Models.Request
{
    public class GetProductsRequest
    {
        [FromQuery]
        public int RowCount { get; set; }
    }
}
