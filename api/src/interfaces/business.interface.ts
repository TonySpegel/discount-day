export interface BusinessInterface {
  businessId: string;
  name: string;
  coordinates: [string, string];
  streetAddress: string;
  discountDish: string;
}

export type BusinessDish = Pick<
  BusinessInterface,
  'name' | 'discountDish'
>;
