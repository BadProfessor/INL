using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace IAmSap.Chapter3.App
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args)
                .Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration((hostingContext, config) =>
            {
                var settings = config.Build();
                // config.AddAzureAppConfiguration(settings["ConnectionStrings:AppConfig"]);
                config.AddAzureAppConfiguration(options =>
                {
                    options.Connect(settings["ConnectionStrings:AppConfig"])
                    .ConfigureRefresh(refresh =>
                    {
                        refresh.Register("Version", true)
                            .SetCacheExpiration(TimeSpan.FromSeconds(5));
                    })
                    .UseFeatureFlags();
                });
            })
                .UseStartup<Startup>();
    }
}
