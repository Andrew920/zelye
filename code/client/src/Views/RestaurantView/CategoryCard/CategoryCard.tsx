import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Icon, IconName } from 'Components';
import './CategoryCard.scss';

export type CategoryCardI = {
  title: string;
  link: string;
  image: string;
  size: 1 | 2 | 3;
};

export const CategoryCard: FC<CategoryCardI> = ({ title, link, image, size }) => {
  const sizes = ['small', 'medium', 'large'];
  const { REACT_APP_SERVER_URL } = process.env;

  return (
    <NavLink
      to={link + ''}
      className={classNames('category-card__container', sizes[size - 1])}
      style={{
        backgroundImage: `linear-gradient(180deg, #333333 0%, rgba(37, 41, 45, 0) 100%), url('${REACT_APP_SERVER_URL}/images/${
          image || 'coca-cola.png'
        }')`,
      }}
    >
      <span className='title'>{title}</span>
      <div className='icon-wrapper'>
        <Icon icon={IconName.ChevronRight} />
      </div>
    </NavLink>
  );
};
