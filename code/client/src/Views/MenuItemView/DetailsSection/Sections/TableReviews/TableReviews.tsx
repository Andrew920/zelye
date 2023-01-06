import { FC } from 'react';
import { FoodRatingT } from 'Types';
import './TableReviews.scss';

export type TableReviewsT = {
  reviews: FoodRatingT;
};

const average = (arr: Array<number | null>) => {
  const nonNull = arr.filter((item) => item != null) as Array<number>;
  return nonNull.reduce((p, c) => p + c, 0) / arr.length;
};

export const TableReviews: FC<TableReviewsT> = ({ reviews }) => {
  const data = [
    {
      category: 'Taste',
      value: reviews.taste,
    },
    {
      category: 'Quality',
      value: reviews.quality,
    },
    {
      category: 'Presentation',
      value: reviews.presentation,
    },
    {
      category: 'Creativity',
      value: reviews.creativity,
    },
    {
      category: 'Memorability',
      value: reviews.memorability,
    },
  ];
  return (
    <div className='table-reviews'>
      {data.map(({ category, value }) => (
        <div className='table-reviews-row'>
          <div className='category'>{category}</div>
          <div className='value'>{value}</div>
        </div>
      ))}
      <div className='table-reviews-row'>
        <div className='category bold'>Overall</div>
        <div className='value bold'>{average(Object.values(reviews))}</div>
      </div>
    </div>
  );
};
