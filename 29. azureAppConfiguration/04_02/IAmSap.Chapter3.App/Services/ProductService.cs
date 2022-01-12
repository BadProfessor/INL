using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using IAmSap.Chapter3.App.Models.Config;
using IAmSap.Chapter3.App.Models.Request;
using IAmSap.Chapter3.App.Models.Response;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace IAmSap.Chapter3.App.Services
{
    public class ProductService : IProductService
    {
        private EcommerceConfig _config;

        public ProductService(IOptionsSnapshot<EcommerceConfig> config)
        {
            _config = config.Value ?? throw new ArgumentNullException(nameof(config));
        }

        /// <summary>
        /// Get products from a "remote" service.
        /// </summary>
        public async Task<GetProductsResponse> GetProductsAsync()
        {
            using (var httpClient = new HttpClient())
            {
                using (var response = await httpClient.GetAsync($"{_config.ProductConfig.ServiceUrl}?RowCount={_config.ProductConfig.RowCount}"))
                {
                    string apiResponse = await response.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<GetProductsResponse>(apiResponse);
                }
            }
        }
    }
}
