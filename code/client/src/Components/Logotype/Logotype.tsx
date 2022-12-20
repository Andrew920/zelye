import { FC } from 'react';
import { ReactComponent as FullLogo } from 'Assets/Images/app-logo.svg';
import { ReactComponent as FullLogoBig } from 'Assets/Images/logotype.svg';
import './Logotype.scss';

export const Logotype: FC = () => {
  return <FullLogo className='app-logotype' />;
};

export const LogotypeBig: FC = () => {
  return <FullLogoBig className='app-logotype-big' />;
};
