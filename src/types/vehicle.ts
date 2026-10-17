
export interface Review {
    rating: number;
    comment: string;
    data: string;
    reviewerName: string;
    reviewerEmail: string;
};

export interface Vehicle {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    brand: string;
    stock: number;
    thumbnail: string;
    images: string[];
    reviews: Review[];
};

export interface VehiclesResponse {
    products: Vehicle[];
    total: number;
    skip: number;
    limit: number;
};