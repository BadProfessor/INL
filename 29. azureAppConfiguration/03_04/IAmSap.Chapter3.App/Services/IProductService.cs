using IAmSap.Chapter3.App.Models.Request;
using IAmSap.Chapter3.App.Models.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IAmSap.Chapter3.App.Services
{
    public interface IProductService
    {
        Task<GetProductsResponse> GetProductsAsync();
    }
}
