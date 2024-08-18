export interface IProduct {
    id: number;
    title: string;
    price: number;
    image: string;
  }

export interface IProductCardProps {
    product: IProduct;
    currency: string;
  }