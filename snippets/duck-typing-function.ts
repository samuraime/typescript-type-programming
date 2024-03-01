// Call Signatures
type F1 = (arg1: number) => boolean;
type F2 = {
    (arg2: number): boolean;
};
interface F3 {
    (arg3: number): boolean;
};

type IsSameFunc1 = Identity<F1, F2>; // true
type IsSameFunc2 = Identity<F1, F3>; // true

// Construct Signatures
type Duck = {};
type C1 = new(wings: number) => Duck;
type C2 = {
    new(wings: number): Duck;
}

type IsSameConstructor1 = Identity<C1, C2>; // true
type IsSameConstructor2 = Identity<C1, C2>; // true

// Compatible shape
type OneArgFn  = (a: number) => boolean;
type TwoArgsFn = (b: number, s: string) => boolean;

type Compatible = OneArgFn extends TwoArgsFn ? true : false; // true
