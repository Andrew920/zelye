import { FC } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import {
  CategoryView,
  MenuItemView,
  RateRestaurantView,
  RestaurantView,
  ScanRestaurantView,
} from 'Views';

export const AppRoutes: FC = () => {
  const routes = useRoutes([
    {
      index: true,
      element: <ScanRestaurantView />,
    },
    {
      path: ':restaurant',
      element: <Outlet />,
      children: [
        { index: true, element: <RestaurantView /> },
        {
          path: 'review-restaurant',
          element: <RateRestaurantView />,
        },
        {
          path: ':category',
          element: <Outlet />,
          children: [
            { index: true, element: <CategoryView /> },
            {
              path: ':dish',
              element: <MenuItemView />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};
