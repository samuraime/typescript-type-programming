// 1. keyof
type FruitMap = {
    apple: '🍎',
    orange: '🍊',
    kiwi: '🥝',
};

type Fruit = keyof FruitMap;

// 2. Intersection, Omit<Type, Keys>, Pick<Type, Keys>


// 3. Union, Exclude<UnionType, ExcludedMembers>, Extract<Type, Union>
