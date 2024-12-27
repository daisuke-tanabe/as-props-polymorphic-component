import { ElementType } from 'react';

import { PolymorphicProps } from '@/types';

const defaultComponent = 'div';

export type BoxProps<AsComponent extends ElementType> = PolymorphicProps<AsComponent>;

export function Box<AsComponent extends ElementType>(
    { as, ...props }: BoxProps<AsComponent>,
  ) {
    const Component = as ?? defaultComponent;

    return <Component {...props} />;
  }