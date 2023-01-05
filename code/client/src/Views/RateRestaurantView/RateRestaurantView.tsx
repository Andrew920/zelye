import { useGetSponsorQuery, useRateRestaurantMutation } from 'Api';
import { BackgroundImage, Button, IconButton, IconName, Slider, Spinner } from 'Components';
import { useAppDispatch, useAppSelector } from 'Hooks';
import { FC, useCallback } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { setHospitality, setAtmosphere, setLocation, setValue, updateItem } from 'Slices';
import { RequestBodyT } from 'Types';
import './RateRestaurantView.scss';

export const RateRestaurantView: FC = () => {
  const { data: sponsorData, isLoading: sponsorIsLoading } = useGetSponsorQuery();
  const [run, { isLoading, isError, isSuccess }] = useRateRestaurantMutation();
  const { restaurant } = useParams();
  const { items, hospitality, atmosphere, value, location } = useAppSelector((state) => state.rate);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmitRating = useCallback(async () => {
    if (!restaurant) return;

    let tasteVal = null;
    if (items.length > 0) {
      tasteVal =
        items.reduce(
          (acc, item) =>
            acc +
            item.creativityVal +
            item.tasteVal +
            item.qualityVal +
            item.memorabilityVal +
            item.presentationVal,
          0
        ) /
        (5 * items.length);
    }
    const requestBody: RequestBodyT = {
      id: restaurant,
      hospitality,
      atmosphere,
      value,
      location,
      food: tasteVal,
      items: items.map((itm) => ({
        id: itm.id,
        taste: itm.tasteVal,
        quality: itm.qualityVal,
        presentation: itm.presentationVal,
        creativity: itm.creativityVal,
        memorability: itm.memorabilityVal,
      })),
    };
    await run(requestBody);
    if (isSuccess && !isLoading) {
      navigate('..');
    }
  }, [items, run, isSuccess, isLoading]);

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

        <Slider
          title='Hospitality'
          currValue={hospitality}
          onChange={(e) => dispatch(setHospitality(e))}
        />
        <Slider
          title='Atmosphere'
          currValue={atmosphere}
          onChange={(e) => dispatch(setAtmosphere(e))}
        />
        <Slider title='Value' currValue={value} onChange={(e) => dispatch(setValue(e))} />
        <Slider title='Location' currValue={location} onChange={(e) => dispatch(setLocation(e))} />

        {items.map((item, i) => {
          return (
            <div className='item-rate'>
              <h4>{item.title}</h4>
              <Slider
                title='Taste'
                currValue={item.tasteVal}
                onChange={(e) =>
                  dispatch(updateItem({ id: item.id, slider: 'tasteVal', value: e }))
                }
              />
              <Slider
                title='Quality'
                currValue={item.qualityVal}
                onChange={(e) =>
                  dispatch(updateItem({ id: item.id, slider: 'qualityVal', value: e }))
                }
              />
              <Slider
                title='Presentation'
                currValue={item.presentationVal}
                onChange={(e) =>
                  dispatch(updateItem({ id: item.id, slider: 'presentationVal', value: e }))
                }
              />
              <Slider
                title='Creativity'
                currValue={item.creativityVal}
                onChange={(e) =>
                  dispatch(updateItem({ id: item.id, slider: 'creativityVal', value: e }))
                }
              />
              <Slider
                title='Memorability'
                currValue={item.memorabilityVal}
                onChange={(e) =>
                  dispatch(updateItem({ id: item.id, slider: 'memorabilityVal', value: e }))
                }
              />
            </div>
          );
        })}
        <div className='finish'>
          <Button
            disabled={isLoading}
            text={isLoading ? 'Submitting' : 'Rate'}
            isLarge
            onClick={handleSubmitRating}
          />
        </div>
      </div>
    </>
  ) : (
    <>Unknown error</>
  );
};
