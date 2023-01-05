import { FC } from 'react';
import './BackgroundImage.scss';

export type BackgroundImageT = {
  image: string;
};

export const BackgroundImage: FC<BackgroundImageT> = ({ image }) => {
  const { REACT_APP_SERVER_URL } = process.env;
  return (
    <div
      style={{
        backgroundImage: `url('${REACT_APP_SERVER_URL}/images/${image || 'coca-cola.png'}')`,
      }}
      className='background-image'
    />
  );
};
