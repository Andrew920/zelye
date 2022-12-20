import { ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLProps } from 'react';

export type ButtonT = {
  text: string;
};

export const Button: FC<
  ButtonT & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ text, ...props }) => {
  return (
    <button className='button' {...props}>
      {text}
    </button>
  );
};
