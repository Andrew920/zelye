import classNames from 'classnames';
import { Icon, IconName } from 'Components';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FoodItemT } from 'Types';
import './FoodItemCard.scss';

export const FoodItemCard: FC<FoodItemT> = ({ id, title, image, description }) => {
  const { REACT_APP_SERVER_URL } = process.env;
  console.log(image);
  return (
    <Link to={id + ''} className={classNames('food-item-card')}>
      <div
        className='food-item-card__background'
        style={{
          backgroundImage: `linear-gradient(270deg, #333333 0%, rgba(51, 51, 51, 0.2) 100%), url('${REACT_APP_SERVER_URL}/images/${image}')`,
        }}
      />
      <div className='food-item-card__content'>
        <div className='text-content'>
          <div className='header'>
            <span>{title}</span>
          </div>
          <div className='description'>{description}</div>
        </div>
        <Icon icon={IconName.ChevronRight} />
      </div>
    </Link>
  );
};
