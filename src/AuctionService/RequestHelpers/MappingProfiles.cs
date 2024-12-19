using AuctionService.DTOs;
using AuctionService.Entities;
using AutoMapper;
using Contracts;
using System.ComponentModel.DataAnnotations;

namespace AuctionService.RequestHelpers;
public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Auction, AuctionDto>().IncludeMembers(x => x.Item);
        CreateMap<Item, AuctionDto>();
        CreateMap<CreateAuctionDto, Auction>()
           .ForMember(d => d.Item, o => o.MapFrom(s => s));
        CreateMap<CreateAuctionDto, Item>();
        CreateMap<AuctionDto, AuctionCreated>();
        CreateMap<Auction, AuctionUpdated>().IncludeMembers(a => a.Item);
        CreateMap<Item, AuctionUpdated>();
    }
}


public class CreateAuctionDto
{
    [Required]
    public string Make { get; set; } = string.Empty;

    [Required]
    public string Model { get; set; } = string.Empty;

    [Required]
    public int Year { get; set; }

    [Required]
    public string Color { get; set; } = string.Empty;

    [Required]
    public int Mileage { get; set; }

    [Required]
    public string ImageUrl { get; set; } = string.Empty;

    [Required]
    public int ReservePrice { get; set; }

    [Required]
    public DateTime AuctionEnd { get; set; }
}