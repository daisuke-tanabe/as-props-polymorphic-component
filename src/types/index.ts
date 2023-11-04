import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithoutRef, PropsWithRef } from 'react';

/**
 * Pにasを追加する
 */
export type PropsWithAs<T extends ElementType, U> = U & {
  as?: T;
};

/**
 * TをUのキーで上書きする
 */
export type OverrideProps<T extends {}, U extends {}> = Omit<T, keyof U> & U;

/**
 * refを除外したポリモーフィックなpropsの型
 */
export type PolymorphicPropsWithoutRef<T extends ElementType, U = {}> = OverrideProps<
  // 条件型を使わないとJSX.IntrinsicElements[T]の制約を満たすことができなかった
  T extends keyof JSX.IntrinsicElements ? PropsWithoutRef<JSX.IntrinsicElements[T]> : ComponentPropsWithoutRef<T>,
  PropsWithAs<T, U>
>;

/**
 * refを付与したポリモーフィックなpropsの型
 * */
export type PolymorphicPropsWithRef<T extends ElementType, U = {}> = OverrideProps<
  // 条件型を使わないとJSX.IntrinsicElements[T]の制約を満たすことができなかった
  T extends keyof JSX.IntrinsicElements ? PropsWithRef<JSX.IntrinsicElements[T]> : ComponentPropsWithRef<T>,
  PropsWithAs<T, U>
>;

/**
 * refに使う型
 */
export type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
