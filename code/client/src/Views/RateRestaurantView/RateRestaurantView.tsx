import { useGetSponsorQuery } from 'Api';
import { BackgroundImage, Button, IconButton, IconName, Slider, Spinner } from 'Components';
import { useAppSelector } from 'Hooks';
import { FC, useState } from 'react';
import './RateRestaurantView.scss';

export const RateRestaurantView: FC = () => {
  const [value, setValue] = useState(0);
  const { data: sponsorData, isLoading: sponsorIsLoading } = useGetSponsorQuery();
  const { items } = useAppSelector((state) => state.rate);
  // Check if user logged in. If not, carry out a login form and then display the rate page.

  return sponsorIsLoading ? (
    <Spinner />
  ) : sponsorData ? (
    <>
      <BackgroundImage image={sponsorData.background} />
      <div className='rate-restaurant'>
        <div className='rate-restaurant__header'>
          <h1>Rate Restaurant</h1>
          <IconButton icon={IconName.Close} href='..' />
        </div>

        <Slider title='Hospitality' currValue={value} onChange={(e) => setValue(e)} />
        <Slider title='Atmosphere' currValue={value} onChange={(e) => setValue(e)} />
        <Slider title='Value' currValue={value} onChange={(e) => setValue(e)} />
        <Slider title='Location' currValue={value} onChange={(e) => setValue(e)} />

        {items.map((item) => {
          return (
            <div className='item-rate'>
              <h4>{item.title}</h4>
              <Slider title='Taste' currValue={value} onChange={(e) => setValue(e)} />
              <Slider title='Quality' currValue={value} onChange={(e) => setValue(e)} />
              <Slider title='Presentation' currValue={value} onChange={(e) => setValue(e)} />
              <Slider title='Creativity' currValue={value} onChange={(e) => setValue(e)} />
              <Slider title='Memorability' currValue={value} onChange={(e) => setValue(e)} />
            </div>
          );
        })}
        <div className='finish'>
          <Button text='Rate' isLarge />
        </div>
      </div>
    </>
  ) : (
    <>Unknown error</>
  );
};
