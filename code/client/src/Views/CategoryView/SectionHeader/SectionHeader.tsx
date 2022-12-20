import { FC } from 'react';
import './SectionHeader.scss';

export type SectionHeaderT = {
  title: string;
};

export const SectionHeader: FC<SectionHeaderT> = ({ title }) => {
  return (
    <div className='section-header'>
      <div className='line leading' />
      <span>{title}</span>
      <div className='line trailing' />
    </div>
  );
};
