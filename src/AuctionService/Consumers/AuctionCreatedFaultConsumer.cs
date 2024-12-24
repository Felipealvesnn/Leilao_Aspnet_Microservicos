using Contracts;
using MassTransit;

namespace AuctionService;
// esse consumer é pra tratar a fila de erros q tem no rabbimq
public class AuctionCreatedFaultConsumer : IConsumer<Fault<AuctionCreated>>
{
    public async Task Consume(ConsumeContext<Fault<AuctionCreated>> context)
    {
        Console.WriteLine("--> Consuming faulty creation");

        var exception = context.Message.Exceptions.First();

        if (exception.ExceptionType == "System.ArgumentException")
        {
            context.Message.Message.Model = "FooBar";
            await context.Publish(context.Message.Message);
        }
        else 
        {
            Console.WriteLine("Not an argument exception - update error dashboard somewhere");
        }
    }
}
