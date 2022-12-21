import { FC } from 'react';
import { AlergenT, IngredientT } from 'Types';
import './List.scss';

export type ListT = {
  items: Array<AlergenT | IngredientT>;
};

export const List: FC<ListT> = ({ items }) => {
  return (
    <ul className='list'>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};
