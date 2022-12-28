import classNames from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, HTMLProps } from 'react';
import './Button.scss';

export type ButtonT = {
  text: string;
  isLarge?: boolean;
};

export const Button: FC<
  ButtonT & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ text, isLarge = false, ...props }) => {
  return (
    <button className={classNames('button', isLarge && 'large')} {...props}>
      {text}
    </button>
  );
};
