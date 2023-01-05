export type RequestBodyT = {
  id: string;
  hospitality: number;
  atmosphere: number;
  value: number;
  location: number;
  food: number | null;
  items: {
    id: string;
    taste: number;
    quality: number;
    presentation: number;
    creativity: number;
    memorability: number;
  }[];
};
