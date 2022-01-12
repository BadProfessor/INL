using IAmSap.Chapter3.App.Models.Request;
using IAmSap.Chapter3.App.Models.Response;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

/// <summary>
/// API's used by our Ecommerce application.
/// </summary>
[Route("api")]
public class ApiController : Controller
{
    [Route("products")]
    public IActionResult FetchProducts(GetProductsRequest req)
    {
        const string description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!";
        List<Product> products = new List<Product>();
        for(var i = 0; i < req.RowCount; i++)
        {
            products.Add(new Product
            {
                Name = $"Product #{i + 1}",
                Description = description,
                ImageUrl = "http://someurl.extension/path/to.png"
            });
        }

        return Ok(new GetProductsResponse
        {
            Products = products
        });
    }
}
