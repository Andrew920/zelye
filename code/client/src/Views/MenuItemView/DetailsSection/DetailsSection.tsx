import { IconButton, IconName } from 'Components';
import { FC, ReactNode, useState } from 'react';
import './DetailsSection.scss';

export type DetailsSectionT = {
  items: {
    id: string;
    icon: IconName;
    name: string;
    component: ReactNode;
  }[];
};

export const DetailsSection: FC<DetailsSectionT> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[0]);
  return (
    <section className='details-section'>
      <div className='details-section__header'>
        <span>{activeItem.name}</span>
        <div>
          {items.map((item) => (
            <IconButton
              key={item.id}
              onClick={() => setActiveItem(item)}
              icon={item.icon}
              className={activeItem.id == item.id ? 'active' : 'inactive'}
            />
          ))}
        </div>
      </div>
      {activeItem.component}
    </section>
  );
};
