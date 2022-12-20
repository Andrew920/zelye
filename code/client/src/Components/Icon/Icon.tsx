import { SvgComponent } from 'Types';
import { IconNameType } from './Icon.enum';
import * as icons from 'Assets/Icons';
import './Icon.scss';

export type IconInterface = {
  icon: IconNameType;
};

export const Icon = ({ icon }: IconInterface) => {
  const IconComponent: SvgComponent = icons[icon];
  return (
    <div className='icon'>
      <IconComponent />
    </div>
  );
};
