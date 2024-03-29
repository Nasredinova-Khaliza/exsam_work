/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITE {
  type GetFavoriteResponse = {
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
  type GetFavoriteRequest = void;

  type PatchFavoriteResponse = {
    success: boolean;
    results: Result[];
  };
  type PatchFavoriteRequest = number
}
