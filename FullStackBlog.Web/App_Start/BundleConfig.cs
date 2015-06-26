using System.Web;
using System.Web.Optimization;

namespace FullStackBlog.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                "~/Scripts/common.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                "~/Scripts/angularjs/angular.js",
                "~/Scripts/angularjs/angular-resource.js",
                "~/Scripts/angularjs/angular-route.js",
                "~/Scripts/angularjs/angular-local-storage.js",
                "~/Scripts/angularjs/angular-mocks.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/authentication").Include(
                "~/Scripts/app/authentication/app.js",
                "~/Scripts/app/config.js",
                "~/Scripts/app/authentication/controllers/LoginCtrl.js",
                "~/Scripts/app/authentication/services/AuthService.js",
                "~/Scripts/app/authentication/services/models/User.js",
                "~/Scripts/app/authentication/services/models/Session.js",
                "~/Scripts/app/constants/auth-events.js",
                "~/Scripts/app/constants/user-roles.js"));

        }
    }
}
