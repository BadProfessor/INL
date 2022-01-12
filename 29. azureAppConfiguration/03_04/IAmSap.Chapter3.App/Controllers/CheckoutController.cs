using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IAmSap.Chapter3.App.Models.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.FeatureManagement;

namespace IAmSap.Chapter3.App.Controllers
{
    public class CheckoutController : Controller
    {
        private IFeatureManager _featureManager;

        public CheckoutController(IFeatureManager featureManager)
        {
            _featureManager = featureManager ?? throw new ArgumentNullException(nameof(featureManager));
        }

        public IActionResult Index()
        {
            return View(new CheckoutViewModel
            {
                IsDiscountEnabled = _featureManager.IsEnabled("DiscountCodes")
            });
        }

    }
}