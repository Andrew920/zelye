import { FC } from 'react';
import './BackgroundImage.scss';

export type BackgroundImageT = {
  image: string;
};

export const BackgroundImage: FC<BackgroundImageT> = ({ image }) => {
  return <div style={{ backgroundImage: `url(${image})` }} className='background-image' />;
};
