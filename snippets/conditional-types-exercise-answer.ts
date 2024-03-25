// 1. 实现 `TypeOfArray<Array>` 获取数组内部的值的类型
type TypeOfArray<A extends Array<any>> = A extends Array<infer V> ? V : never;

type InnerType = TypeOfArray<string[]>; // string

// 2. 实现 `MyParameters<Type>` 获取函数的参数的类型
type MyParameters<F extends (...args: any) => any> = F extends (...args: infer P) => any ? P : never;

type TestFn = (a: string, b: number) => number;
type Params = MyParameters<TestFn>; // [a: string, b: number]

// More Built-in Utilities
