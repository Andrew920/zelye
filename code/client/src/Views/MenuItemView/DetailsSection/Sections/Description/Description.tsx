import { FC } from 'react';

export type DescriptionT = {
  content: string;
};

export const Description: FC<DescriptionT> = ({ content }) => {
  return <div>{content}</div>;
};
