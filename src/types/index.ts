import { Request as ExpressRequest, Response as ExpressResponse } from 'express';

export interface Request extends ExpressRequest {
  body: {
    ids?: number[];
  };
}

export interface Response extends ExpressResponse {}

export interface Product {
  readonly id: number;
  readonly name: string;
  readonly image: string;
  readonly price: number;
  readonly originalPrice: number;
  readonly discount: number;
  readonly seller: string;
  readonly sales: number;
  readonly rating: number;
  readonly reviews: number;
  readonly shipping: boolean;
  readonly type: string;
  readonly connectivity: string;
  readonly battery: string;
}
