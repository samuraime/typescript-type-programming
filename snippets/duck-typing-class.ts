class Duck {
    wings = 2
    fly() {}
}

class SuperDuck {
    wings = 4;
    fly() {}
    jump() {}
}

const duck: Duck = new SuperDuck();


interface IMonster {
    wings: number;
    fly(): void;
}

class Monster implements IMonster {
    constructor(wings: number) {}
    wings: number = 4;
    fly(): void {}
}

interface MonsterContructor {
    new(wings: number): IMonster;
}

type T1 = Identity<MonsterContructor, typeof Monster>; // true

const monster = new Monster(2);

type T2 = Identity<typeof monster, IMonster>;
