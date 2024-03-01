declare type Identity<A, B> = A extends B
    ? B extends A ? true : false
    : false;
