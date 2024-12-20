using AuctionService.Data;
using MassTransit;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace AuctionService
{
    public static class ServicesAdiconados
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddMassTransit(x =>
            {
                x.AddEntityFrameworkOutbox<AuctionDbContext>(o =>
                {
                    o.QueryDelay = TimeSpan.FromSeconds(10);

                    o.UsePostgres();
                    o.UseBusOutbox();
                });

                // Adiciona todos os consumidores do namespace
                x.AddConsumersFromNamespaceContaining<AuctionCreatedFaultConsumer>();

                x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("auction", false));

                x.UsingRabbitMq((context, cfg) =>
                {
                    cfg.Host(configuration["RabbitMq:Host"], "/", h =>
                    {
                        h.Username(configuration.GetValue("RabbitMQ:Username", "guest")!);
                        h.Password(configuration.GetValue("RabbitMQ:Password", "guest")!);
                    });

                    cfg.ConfigureEndpoints(context);
                });
            });


            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
           .AddJwtBearer(options =>
           {
               options.Authority = configuration["IdentityServiceUrl"];
               options.RequireHttpsMetadata = false;
               options.TokenValidationParameters.ValidateAudience = false;
               options.TokenValidationParameters.NameClaimType = "username";
           });

            return services;
        }
    }
}
