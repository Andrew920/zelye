import { FC } from 'react';
import './List.scss';

export type ListT = {
  items: Array<string>;
};

export const List: FC<ListT> = ({ items }) => {
  return (
    <ul className='list'>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
