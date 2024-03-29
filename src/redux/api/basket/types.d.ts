/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BASKET {
  type GetBasketResponse = {
    success: boolean;
    results: Result[];
  };
  type Result = {
    id: number;
    title: string;
    photo: string;
    price: number;
    quantity: number;
    isBasket: boolean;
    isFavorite: boolean;
    vendor: Vendor;
    createdAt: string;
    updatedAt: string;
  };
  type Vendor = {
    name: string;
    login: string;
    photo: string;
  };
  type GetBasketRequest = void;

  type PatchBasketResponse = {
    success: boolean;
    results: Result[];
  };
  type PatchBasketRequest = number;
}
