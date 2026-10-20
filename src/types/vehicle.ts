export interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail?: string;
}

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
}

export interface VehiclesResponse {
	products: Vehicle[];
	total: number;
	skip: number;
	limit: number;
}

export interface FilterValues {
	search?: string;
	sortBy: SortOption;
}

export type SortOption = "default" | "price-asc" | "price-desc";
