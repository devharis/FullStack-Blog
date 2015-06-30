// --------------------------------------------------------------------------------------------------------------------
// <copyright file="BundleConfig.cs" company="">
//   Copyright © 2015 
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.FullStack.Web
{
    using System.Web;
    using System.Web.Optimization;

    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/content/css/app").Include("~/content/app.css"));

            bundles.Add(new ScriptBundle("~/js/jquery").Include("~/scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                "~/scripts/common.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularjs").Include(
                "~/scripts/vendor/angular.js",
                "~/scripts/vendor/angular-resource.js",
                "~/scripts/vendor/angular-mocks.js",
                "~/scripts/lib/angular-ls/angular-local-storage.js",
                "~/scripts/lib/angular-ui/ui-bootstrap-tpls-0.13.0.js"));

            bundles.Add(new ScriptBundle("~/js/app").Include(
                "~/scripts/vendor/angular-ui-router.js",
                "~/scripts/filters.js",
                "~/scripts/services.js",
                "~/scripts/directives.js",
                "~/scripts/controllers.js",
                "~/scripts/app.js"));

            bundles.Add(new ScriptBundle("~/bundles/authentication").Include(
                "~/scripts/authentication/app.js",
                "~/scripts/config.js",
                "~/scripts/authentication/controllers/LoginCtrl.js",
                "~/scripts/authentication/services/AuthService.js",
                "~/scripts/authentication/services/models/Session.js",
                "~/scripts/authentication/directives/login.js",
                "~/scripts/constants/auth-events.js",
                "~/scripts/constants/user-roles.js"));
        }
    }
}
