type Duck = {
    feet: number;
    weapon: '🔥'
}

type Dragon = {
    feet: number;
    weapon:  '💦'
}

type IsDragon = Duck extends Dragon ? true : false;


// Inferring
type Weapon<T extends {weapon: any}> = T extends {weapon: infer T} ? T : never;

type DuckWeapon = Weapon<Duck>;
type DragonWeapon = Weapon<Dragon>;
