import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { BackgroundImage, Icon, IconButton, IconName, Spinner } from 'Components';
import { useGetRestaurantQuery, useGetSponsorQuery } from 'Api';
import { CategoryT } from 'Types';
import { CategoryCard } from './CategoryCard';
import { Header } from './Header/Header';
import './RestaurantView.scss';

const splitCategories = (categories: CategoryT[]): [CategoryT[], CategoryT[]] => {
  return categories.reduce(
    (acc, category) => {
      if (category.col === 0) {
        acc[0].push(category);
      } else {
        acc[1].push(category);
      }
      return acc;
    },
    [[], []] as [CategoryT[], CategoryT[]]
  );
};

export const RestaurantView: FC = () => {
  const { restaurant } = useParams();

  const { data: sponsorData, isLoading: sponsorIsLoading } = useGetSponsorQuery();
  const { data: restaurantData, isLoading: restaurantIsLoading } = useGetRestaurantQuery(
    restaurant || ''
  );

  return sponsorIsLoading ? (
    <Spinner />
  ) : sponsorData ? (
    <>
      <BackgroundImage image={sponsorData.background} />
      {restaurantIsLoading ? (
        <Spinner />
      ) : restaurantData ? (
        <div className='restaurant-view__content'>
          <Header logotype={sponsorData.logotype} />
          <div className='restaurant-view__title'>
            <h1>{restaurantData?.title}</h1>
            <Icon icon={IconName.Info} />
          </div>
          <div className='restaurant-view__categories-table'>
            {splitCategories(restaurantData.menu).map((categoryArr: CategoryT[], i: number) => (
              <div key={`category-${i}`} className='restaurant-view__categories_col'>
                {categoryArr.map((category: CategoryT) => (
                  <CategoryCard
                    key={category.category}
                    title={category.category}
                    link={category.id}
                    image={category.image}
                    size={category.size}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className='restaurant-view__action_button'>
            <IconButton
              variant='primary'
              size='large'
              icon={IconName.RateReview}
              href='review-restaurant'
            />
          </div>
        </div>
      ) : (
        <>Data could not be displayed</>
      )}
    </>
  ) : (
    <>Unknown error</>
  );
};
