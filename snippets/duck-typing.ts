type Duck = {
    feet: number;
    fly(): void;
}

interface Dragon {
    feet: number;
    fly(): void;
    dracarys(): void;
}

class Goose {
    feet: number = 2;
    fly() {}
}

type R1 = Dragon extends Duck ? true : false; // true
type R2 = Goose extends Duck ? true : false; // true
const duck: Duck = new Goose();
