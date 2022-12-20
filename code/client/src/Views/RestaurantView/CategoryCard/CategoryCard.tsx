import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Icon, IconName } from 'Components';
import './CategoryCard.scss';

export type CategoryCardI = {
  title: string;
  link: string;
  image: string;
  size: 'large' | 'medium' | 'small';
};

export const CategoryCard: FC<CategoryCardI> = ({ title, link, image, size }) => {
  return (
    <NavLink
      to={link}
      className={classNames('category-card__container', size)}
      style={{
        backgroundImage: `linear-gradient(180deg, #333333 0%, rgba(37, 41, 45, 0) 100%), url(${image})`,
      }}
    >
      <span className='title'>{title}</span>
      <div className='icon-wrapper'>
        <Icon icon={IconName.ChevronRight} />
      </div>
    </NavLink>
  );
};
