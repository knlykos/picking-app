export type Product = {
  id?: number;
  active?: boolean;
  name?: string;
  code?: string;
  description?: string;
  barcode: string;
  price: number | string;
  cost: number | string;
  image: string;
  canBeSold: boolean;
  canBePurchace: boolean;
  createdBy?: number | null;
  createdAt?: Date | string;
  updatedBy?: number | null;
  updatedAt?: Date | string | null;
  deleteAt?: Date | string | null;
  deleteBy?: number | null;
};
