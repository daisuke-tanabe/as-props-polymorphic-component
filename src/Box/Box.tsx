import { ElementType, forwardRef, PropsWithChildren, ReactNode } from 'react';

import { PolymorphicPropsWithoutRef, PolymorphicPropsWithRef, PolymorphicRef } from '@/types';

type BoxBaseProps = PropsWithChildren;

export type BoxProps<T extends ElementType> = PolymorphicPropsWithRef<T, BoxBaseProps>;

const defaultComponent = 'div';

export const Box: <T extends ElementType = typeof defaultComponent>(props: BoxProps<T>) => ReactNode = forwardRef(
  function Box<T extends ElementType = typeof defaultComponent>(
    { as, className, ...props }: PolymorphicPropsWithoutRef<T, BoxBaseProps>,
    ref: PolymorphicRef<T>,
  ) {
    const Component = as ?? defaultComponent;
    const rootClass = className ?? 'Box';

    return <Component className={rootClass} ref={ref} {...props} />;
  },
);
