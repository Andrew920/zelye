import { useGetRestaurantQuery } from 'Api';
import { Button, IconButton, IconName, Spinner } from 'Components';
import { useAppDispatch, useAppSelector } from 'Hooks';
import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { addToRate, removeFromRate } from 'Slices';
import { DetailsSection } from './DetailsSection';
import { Description, List, Radar, TableReviews } from './DetailsSection/Sections';
import './MenuItemView.scss';

export const MenuItemView: FC = () => {
  const { restaurant, category: categoryId, dish } = useParams();

  const { data, isLoading } = useGetRestaurantQuery(restaurant || '');

  const foodItem = useMemo(() => {
    if (!categoryId || !dish || !restaurant || !data) return undefined;
    return data.menu
      .find((item) => item.id == categoryId)
      ?.subcategories.map((item) => item.items)
      .flat()
      .find((item) => item.id == dish);
  }, [data, categoryId, dish, restaurant]);

  const { items } = useAppSelector((state) => state.rate);
  const dispatch = useAppDispatch();

  console.log(foodItem);

  const { REACT_APP_SERVER_URL } = process.env;
  return isLoading ? (
    <Spinner />
  ) : foodItem ? (
    <div className='menu-item-view__content'>
      <div
        className='header'
        style={{
          backgroundImage: `linear-gradient(0deg, #25292D 0%, rgba(51, 51, 51, 0.2) 100%), url('${REACT_APP_SERVER_URL}/images/${
            foodItem.image || 'default.png'
          })`,
        }}
      >
        <div className='navigation-header'>
          <IconButton icon={IconName.ChevronLeft} href='..' />
          <Button
            text={items.some((item) => item.id == foodItem.id) ? 'Remove' : 'Add to rate'}
            onClick={() =>
              dispatch(
                items.some((item) => item.id == foodItem.id)
                  ? removeFromRate(foodItem.id)
                  : addToRate(foodItem)
              )
            }
          />
        </div>

        <div className='title-header'>
          <h3>{foodItem.title}</h3>
          <span>
            {foodItem.price.amount} {foodItem.price.currency}
          </span>
        </div>
      </div>

      <DetailsSection
        items={[
          {
            id: '1',
            icon: IconName.TextSnippet,
            name: 'Description',
            component: <Description content={foodItem.description} />,
          },
          {
            id: '2',
            icon: IconName.Egg,
            name: 'Alergens',
            component: <List items={foodItem.alergens} />,
          },
          {
            id: '3',
            icon: IconName.Ingredients,
            name: 'Ingredients',
            component: <List items={foodItem.ingredients} />,
          },
        ]}
      />
      <DetailsSection
        items={[
          {
            id: '1',
            icon: IconName.Radar,
            name: 'Reviews',
            component: <Radar reviews={foodItem.rating} />,
          },
          {
            id: '2',
            icon: IconName.TableRows,
            name: 'Reviews',
            component: <TableReviews reviews={foodItem.rating} />,
          },
        ]}
      />
    </div>
  ) : (
    <>Error</>
  );
};
