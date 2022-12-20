import { FC } from 'react';
import { AlergenT, IngredientT } from 'Types';

export type ListT = {
  items: Array<AlergenT | IngredientT>;
};

export const List: FC<ListT> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};
