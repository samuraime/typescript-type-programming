// 1. 实现 `TypeOfArray<Array>` 获取数组内部的值的类型
type TypeOfArray<A> = unknown;

type InnerType = TypeOfArray<string[]>; // string

// 2. 实现 `MyParameters<Type>` 获取函数的参数的类型
type MyParameters<F> = unknown;

type TestFn = (a: string, b: number) => number;
type Params = MyParameters<TestFn>; // [a: string, b: number]

// More Built-in Utilities
