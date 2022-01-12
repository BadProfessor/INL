using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IAmSap.Chapter3.App.Models.Response
{
    public class GetProductsResponse
    {
        public IEnumerable<Product> Products { get; set; }
    }
}
