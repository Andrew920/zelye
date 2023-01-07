export type ContantInfoT = {
  mobile: string;
  location: {
    country: string;
    city: string;
    postCode: string;
    address: string;
  };
  email: string;
};

export type RestaurantRatingT = {
  hospitality: number | null;
  food: number | null;
  atmosphere: number | null;
  value: number | null;
  location: number | null;
};

export type FoodRatingT = {
  taste: number | null;
  quality: number | null;
  presentation: number | null;
  creativity: number | null;
  memorability: number | null;
};

export type FoodItemT = {
  id: string;
  title: string;
  image: string;
  description: string;
  allergens: Array<string>;
  ingredients: Array<string>;
  rating: FoodRatingT;
  price: {
    currency: string;
    amount: number;
  };
};

export type SubcategoryT = {
  id: string;
  title: string;
  items: Array<FoodItemT>;
};

export type CategoryT = {
  id: string;
  category: string;
  image: string;
  col: 0 | 1;
  size: 1 | 2 | 3;
  subcategories: Array<SubcategoryT>;
};

export type RestaurantT = {
  title: string;
  description: string;
  contantInformation: ContantInfoT;
  restaurantRating: RestaurantRatingT;
  menu: Array<CategoryT>;
};
