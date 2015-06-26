using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FullStackBlog.Web.Startup))]
namespace FullStackBlog.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
