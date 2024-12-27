import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, JSX, JSXElementConstructor } from 'react';

export type PropsOf<Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<unknown>> =
  JSX.LibraryManagedAttributes<Component, ComponentPropsWithoutRef<Component>>;

export type ExtendableProps<BaseProps = object, OverrideProps = object> = OverrideProps & Omit<BaseProps, keyof OverrideProps>;

export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];

export type InheritableElementProps<Component extends ElementType, Props = object> = ExtendableProps<
  PropsOf<Component>,
  Props
>;

export type PolymorphicProps<AsComponent extends ElementType, Props = object> = InheritableElementProps<
  AsComponent,
  Props & { as?: AsComponent } & { ref?: PolymorphicRef<AsComponent> }
>;