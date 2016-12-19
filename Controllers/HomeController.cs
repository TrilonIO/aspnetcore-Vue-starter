namespace AspnetcoreVue.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new { DataFromController = "Tada!" });
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
