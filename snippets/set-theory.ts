type A = 1 | 2 | 3 | 4;
type B = 2 | 4;
type C = 3 | 4;

type R1 = (A & B) | C;
type R2 = (A | C) & (B | C);

type R3 = (A | B) & C;
type R4 = (A & C) | (B & C);

type R5 = Exclude<A, B> & C;
type R6 = Exclude<A & C, B & C>;
