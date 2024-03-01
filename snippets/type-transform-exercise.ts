// 1. 实现类似 `keyof` 的 `ValueOf`
type ValueOf<T> = unknown;

type FruitMap = {
    apple: '🍎',
    orange: '🍊',
    kiwi: '🥝',
};
type Fruit = ValueOf<FruitMap>; // "🍎" | "🍊" | "🥝"

// 2. 实现 `MyPartial<Type>`
type MyPartial<T> = unknown;

type TestProps = {
    a: number;
    b: string;
};
type PartialProps = MyPartial<TestProps>; // {a?: number; b?: string}
