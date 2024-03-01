interface Dracarysable {
    dracarys(): void;
}

type WithDracarys<T> = T & Dracarysable;

type Duck = {
    feet: number;
    fly(): void;
}
type Dragon = WithDracarys<Duck>;
