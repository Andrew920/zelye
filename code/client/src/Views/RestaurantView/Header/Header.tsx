import { FC } from 'react';
import { Icon, IconButton, IconName, Logotype } from 'Components';
import './Header.scss';

export type HeaderT = {
  logotype: string;
};

export const Header: FC<HeaderT> = ({ logotype }) => {
  const { REACT_APP_SERVER_URL } = process.env;

  return (
    <div className='app-header'>
      <Logotype />

      <img src={`${logotype}`} />
      <IconButton href={'..'} icon={IconName.Close} />
    </div>
  );
};
