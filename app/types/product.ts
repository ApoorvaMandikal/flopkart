export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }

export interface IProductCardProps {
    product: IProduct;
    currency: string;
  }