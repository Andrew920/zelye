import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import './Slider.scss';

export type SliderT = {
  onChange: (value: number) => void;
  currValue: number;
  title: string;
};

export const Slider: FC<SliderT> = ({ title, currValue, onChange }) => {
  const [val, setVal] = useState(currValue);
  const valueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onChange(val);
  }, [val, onChange]);

  return (
    <div className='slider'>
      <span>{title}</span>
      <div className='slider-container'>
        <div className='edge-number'>{0}</div>
        <input
          type='range'
          min={0}
          max={100}
          value={val}
          ref={valueRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setVal(+event.target.value);
          }}
        />
        <div className='edge-number'>{100}</div>
      </div>
    </div>
  );
};
