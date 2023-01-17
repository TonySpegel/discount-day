/**
 * Copyright © 2022/2023 Tony Spegel
 */

type DiscountCategoryType =
  | 'döner'
  | 'gemüse döner'
  | 'pizza'
  | 'nudeln'
  | 'falafel'
  | 'schnitzel'
  | 'sandwich'
  | 'salat';

export interface DiscountCardInterface {
  business: string;
  coords: {
    x: number;
    y: number;
  };
  category: DiscountCategoryType;
  name: string;
  price: number;
}
