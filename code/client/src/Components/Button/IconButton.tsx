import { FC, ButtonHTMLAttributes } from 'react';
import { Icon, IconName } from 'Components';
import { Link, To } from 'react-router-dom';
import './Button.scss';
import classNames from 'classnames';

export type IconButtonT = {
  icon: IconName;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  href?: To;
  destructive?: boolean;
  lifted?: boolean;
  className?: string;
};

export const IconButton: FC<IconButtonT & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  icon,
  href,
  variant = 'secondary',
  size = 'normal',
  destructive = false,
  lifted = false,
  className,
  ...props
}) => {
  const Button = (
    <button
      className={classNames(
        'icon-button',
        variant,
        size,
        destructive && 'destructive',
        lifted && 'lifted',
        className
      )}
      {...props}
    >
      <Icon icon={icon} />
    </button>
  );

  return href ? <Link to={href}>{Button}</Link> : Button;
};
