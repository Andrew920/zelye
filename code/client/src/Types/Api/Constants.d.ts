export type AlergenT = {
  id: string;
  name: string;
  icon: string;
};

export type IngredientT = {
  id: string;
  name: string;
  alergens: Array<AlergenT>;
};
