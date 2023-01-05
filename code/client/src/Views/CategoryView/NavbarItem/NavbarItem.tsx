import { FC, RefObject } from 'react';
import classNames from 'classnames';
import './NavbarItem.scss';

export type NavbarItemT = {
  active: boolean;
  text: string;
  id: string;
  anchorRef: RefObject<HTMLAnchorElement>;
};

export const NavbarItem: FC<NavbarItemT> = ({ text, active, id, anchorRef }) => {
  return (
    <a
      ref={anchorRef}
      href={`#${id}`}
      className={classNames('navbar-item', active && 'active-link')}
    >
      <span>{text}</span>
    </a>
  );
};
