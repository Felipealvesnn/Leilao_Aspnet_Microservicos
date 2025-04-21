using MongoDB.Entities;

namespace SearchService;

public class AuctionSvcHttpClient(HttpClient httpClient, IConfiguration config)
{
    public async Task<List<Item>> GetItemsForSearchDb()
    {
        var lastUpdated = await DB.Find<Item, string>()
            .Sort(x => x.Descending(x => x.UpdatedAt))
            .Project(x => x.UpdatedAt.ToString())
            .ExecuteFirstAsync();

        var auctionURL = config["AuctionServiceUrl"]
            ?? throw new ArgumentNullException("Cannot get auction address");

        var url = auctionURL + "/api/auctions";

        if (!string.IsNullOrEmpty(lastUpdated))
        {
            url += $"?date={lastUpdated}";
        }
        else {
            url += $"?date=2024-01-18";


        }
        List<Item> items = null;
        try
        {
             items = await httpClient.GetFromJsonAsync<List<Item>>(url);
        }
        catch (Exception e) {
            Console.WriteLine(e.Message);
        }

        return items ?? [];
    }
}
