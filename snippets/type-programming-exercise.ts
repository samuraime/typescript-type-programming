import React from 'react';

// 练习1，实现 `defaultProps` 的类型 `InexactPartial<P>`
type InexactPartial<P> = {
    [key in keyof P]?: P[key] | undefined;
};

type FunctionComponent<P = {}> = {
    (props: P): React.ReactNode;
    defaultProps?: InexactPartial<P>;
};

type MyComponentProps = {
    a: string;
    b: number;
};

const MyComponent = (props: MyComponentProps) => {
    return JSON.stringify(props);
};

MyComponent.defaultProps = {
    a: 'default a',
    c: false,
};

// 练习2，实现 `Defaultize<P, D>` 获取合并后的Props
type Defaultize<P, D> = Pick<P, Exclude<keyof P, keyof D>>
    & InexactPartial<Pick<P, Extract<keyof P, keyof D>>>
    & InexactPartial<Pick<D, Exclude<keyof D, keyof P>>>;

export type ExternalProps = Defaultize<MyComponentProps, typeof MyComponent.defaultProps>

type PropA = ExternalProps['a']; // string | undefined
type PropB = ExternalProps['b']; // number
type PropC = ExternalProps['c']; // boolean | undefined

// 练习3. 实现 `ComponentProps<Component>` 获取组件最终对消费方暴露的Props
type ComponentProps<C extends FunctionComponent<any>> = C extends {defaultProps: infer D, (props: infer P): any}
    ? Defaultize<P, D>
    : C extends {(props: infer P): any}
        ? P
        : never;

export type ExternalProps2 = ComponentProps<typeof MyComponent>;

type ExternalPropA = ExternalProps['a']; // string | undefined
type ExternalPropB = ExternalProps['b']; // number
type ExternalPropC = ExternalProps['c']; // boolean | undefined
