// Primitives
type FruitEmoji = '🍎' | '🍊' | '🥝';
const fruitEmoji = '🍎';

type Yes = true;
const yes = true;

// Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}
const direction = Direction.Up; // Enum as a value

let myDirection: Direction; // Enum as a type
myDirection = Direction.Left; // Enum value

// Classes
const MyString = String; // Class as a value, serve as a constructor for creating object
const s = new MyString('yes');

function log(s: String) { // Class as a type, describes the shape of an object
    console.log(s.toLowerCase());
}

// typeof
type S = typeof String;

const fruitMap = {
    apple: '🍎',
    orange: '🍊',
    kiwi: '🥝',
};

type Fruit = keyof typeof fruitMap;
