// TODO: remove this comment and the next line, make sure the code compiles
/* eslint-disable @typescript-eslint/no-unused-vars */

// Create a function which uses tuple type to calculate the distance between two points in 2D space
function excercise4() {
  // TODO: declare two variables of type tuple, each with two numbers
  let pointA: [number, number] = [0, 0];
  let pointB: [number, number] = [0, 0];
  // TODO: assign values to the variables (1,1) and (4,5)
  pointA = [1, 1];
  pointB = [4, 5];
  // TODO: create a function which calculates the distance between two points in 2D space
  function distance(p1: [number, number], p2: [number, number]): number {
    const x1 = p1[0]; // TODO: replace with the first element of p1
    const y1 = p1[1]; // TODO: replace with the second element of p1
    const x2 = p2[0]; // TODO: replace with the first element of p2
    const y2 = p2[1]; // TODO: replace with the second element of p2
    // TODO: calculate the distance
    return getDistanceBetweenTwoPoint2D(x1, y1, x2, y2);
  }
  // create extend help function for caclulate distance
  function getDistanceBetweenTwoPoint2D(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number {
    const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
    return distance;
  }
  // TODO: call the function and print the result to console
  const res = distance(pointA, pointB);
  console.log('%c distance: ', 'color: lightgreen', res);
}
// TODO: compile and run the code
excercise4(); // distance: 5

// Create a function which uses type alias to calculate the distance between two points in 2D space - points are objects with x and y properties
function excercise5() {
  // TODO: declare a type alias for a point in 2D space (TPoint) - object with x and y properties
  type TPoint2D = {
    x: number;
    y: number;
  };
  // TODO: declare two variables of type TPoint
  let p1: TPoint2D = { x: 0, y: 0 };
  let p2: TPoint2D = { x: 0, y: 0 };
  // TODO: assign values to the variables (1,1) and (4,5)
  p1 = { x: 1, y: 1 };
  p2 = { x: 4, y: 5 };
  // TODO: create a function which calculates the distance between two points in 2D space
  // type TPoint = { /* replace  with your code */ x: '' };  // will err -> x as string NOT number
  function distance(p1: TPoint2D, p2: TPoint2D): number {
    // const x1 = 0; // TODO: replace with the first element of p1
    // const y1 = 0; // TODO: replace with the second element of p1
    // const x2 = 0; // TODO: replace with the first element of p2
    // const y2 = 0; // TODO: replace with the second element of p2
    // TODO: use distructuring to get x and y from p1 and p2
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    // TODO: calculate the distance
    const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
    return distance;
  }
  // TODO: call the function and print the result to console
  const res = distance(p1, p2);
  console.log('%c distance: ', 'color: tomato', res);
}
// TODO: compile and run the code
excercise5(); //  distance:  5

// Create functions that use const declarations
function excercise6() {
  // TODO: declare a const PI and assign value 3.14
  const PI = 3.14159265358; // "Это Я Знаю И Помню Прекрасно Их Многие Знаки Мне Лишни Напрасно"
  // TODO: declare a function which calculates a circle area, takes radius as a parameter
  function getAreaCircle2D(r: number): number {
    const area = 2 * PI * r;
    return area;
  }
  // TODO: call the function and print the result to console
  console.log('%c distance: ', 'color: lightblue', getAreaCircle2D(2));
  // TODO: check the type of PI variable
  console.log(typeof PI); // in JS - number BUT in TS = 3.14159265358
  // TODO: declare a const variable that is an object with two properties - name and age
  type TUser = {
    username: string;
    age: number;
  };
  const user: TUser = { username: 'Stan', age: 45 };
  // TODO: declare a function which takes a person object as a parameter and increments age by 1
  function growingUp(user: TUser): TUser {
    return {
      ...user,
      age: user.age + 1,
    };
  }
  // TODO: call the function and print the person object to console
  console.log('%c distance: ', 'color: orange', growingUp(user));
}
excercise6();

// Create a function that takes as a first parameter an array of numbers
// a second parameter - a function that takes a number and returns a number.
// and returns a new array with the results of function called on each element of the array (function passed as a first parameter)
function excercise7() {
  // TODO: add type annotations
  type TListNumbers = number[];
  type TMapSumFn = (arr: TListNumbers, fn: Function) => number[];

  const map: TMapSumFn = (arr, fn) => {
    // TODO: add logic here
    const doubled = [];

    // TODO: use regular for loop
    for (let i = 0; i < arr.length; i++) {
      doubled.push(arr[i] * 2);
    }
    return doubled;
  };
  // TODO: create an array of numbers
  const measurements: TListNumbers = [1, 2, 12, 3, 2, 4, 12, 5, 41, 6, 14];
  // TODO: create a function which doubles a number
  function multTwo(num: number): number {
    return num * 2;
  }
  // TODO: call map function (created earlier) with the array and the function
  const res: number[] = map(measurements, multTwo);
  // TODO: print the result to console
  console.log('%c input: ', 'color: yellow', measurements);
  console.log('%c doubled: ', 'color: violet', res);
}
// TODO: compile and run the code
excercise7();

// declare a function which takes a user and prints greeting to console
function excercise8() {
  // TODO: create a type for user, with name property
  type TUser = {
    name: string;
  };
  // TODO: create a function with name printGreeting, which takes a user and prits greeting to console
  function printGreeting(user: TUser): void {
    console.log(`%c Hello ${user.name}`, 'color: lightgray');
  }
  // TODO: create a type for product, with name property and price property
  type TProduct = {
    name: string;
    price: number;
  };
  // TODO: create a product object, asign it some object literal
  const product: TProduct = {
    name: 'laptop',
    price: 3500,
  };
  // TODO: call the function with product as a parameter
  printGreeting(product);
  // TODO: call the function with object literal as a parameter
  printGreeting({ name: 'testProduct' });
  // TODO: try adding extra property to the object literal - observe the error
  // printGreeting({ name: 'testExtendData', count: 100 }); // err -> Object literal may only specify known properties, and 'count' does not exist in type 'TUser'.

  // TODO: fix the error with type assertion
  printGreeting({ name: 'testExtendData', count: 100 } as TUser);
}
// TODO: compile and run the code
excercise8();

// declare a `Book` class with a constructor and a method
function excercise9() {
  // TODO: declare a `Book` class with a constructor and a method `getInfo` which returns the book info as a string
  // TODO: constructor should take three parameters - title and year of publication
  // TODO: method `getInfo` should return the book title and year as a string
  // TODO: add a new method `getAge` which returns the age of the book (current year - year of publication)
  // TODO: add a new method `revise` which takes a new year as a parameter and updates the year property, add validation to the method - year can not be in the future, year can not be less than prev year

  class Book {
    // private year: number;
    // protected year: number;  // comment for correct work class Magazine extenda Book with in super(..., year )
    year: number;
    title: string;
    description: string;

    constructor(title: string, year: number, description: string) {
      this.title = title;
      this.year = year;
      this.description = description;
    }

    currentYear: number = new Date().getFullYear();
    consoleWarning = 'color: red';

    getInfo() {
      return `"${this.title}" published in ${this.year}`;
    }

    getAge(): number {
      return this.currentYear - this.year;
    }

    revise(newYear: number): void {
      if (newYear > this.currentYear) {
        console.log(
          `%c New year ${newYear} can not be more current year ${this.currentYear}!`,
          this.consoleWarning,
        );
      } else if (newYear <= this.year) {
        console.log(
          `%c New year ${newYear} should be more previous book year ${this.year}!`,
          this.consoleWarning,
        );
      } else {
        this.year = newYear;
        console.log(
          `%c year was updatetd to: ${book.getInfo()}`,
          consoleBookStyle,
        );
      }
    }
  }
  // TODO: create a book object and call the method `getInfo`, print the result to console
  const book: Book = new Book('1984', 1949, 'Oruel lait version 2024');
  const consoleBookStyle =
    'color: lightblue; font-size: 16px; font-family: cursive; font-style: italic;'; //
  console.log(`%c book: ${book.getInfo()}`, consoleBookStyle);
  // TODO: assign a new value to the year property
  // TODO: add private modifier to the year property
  // TODO: try to access the year property from outside of the class - observe the error
  // TODO: change protected modifier to the year property, remove private modifier
  // book.year = 1979; // err after set as private or protected

  // TODO: call the method `getInfo` again
  console.log(`%c update book: ${book.getInfo()}`, consoleBookStyle);
  // TODO: call the method `getAge` and print the result to console
  console.log(`%c age book year: ${book.getAge()}`, consoleBookStyle);
  // TODO: call the method `revise` and pass a new year as a parameter
  book.revise(2025);
  book.revise(1979);
  book.revise(2022);

  // TODO: create a subclass `Magazine` which extends `Book` class
  // TODO: add a new properties `month` and `day` to the `Magazine` class (no need to validate month and day)
  // TODO: add constructor override to the Magazine class which takes four parameters - title, year, month and day
  // TODO: use super keyword to call the `Book` class constructor with title and year parameters
  // TODO: add a method override `getInfo` to the `Magazine` class which prints the magazine info to console
  // TODO: use super keyword to call the `getInfo` method of the `Book` class
  class Magazine extends Book {
    month: number;
    day: number;

    constructor(
      title: string,
      year: number,
      description: string,
      month: number,
      day: number,
    ) {
      super(title, year, description);
      this.month = month;
      this.day = day;
    }

    mothNames: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    getInfo() {
      console.log(
        `%c Magazine details: 
  title: ${this.title}
  last published on: ${this.year} ${this.mothNames[this.month]} ${this.day}
  description: ${this.description}
  `,
        'color: violet',
      );
      return super.getInfo();
    }
  }

  // TODO: create a magazine object and call the method `getInfo`, print the result to console
  const magazine = new Magazine(
    '][akep',
    2000,
    'not bad in old time coding magazine',
    1,
    1,
  );
  // TODO: call the inherited method `getAge` of the magazine object and print the result to console
  magazine.getInfo();
  console.log('Magazine age: ', magazine.getAge());
}
// TODO: compile and run the code
excercise9();

// TODO: for excercise4 and excercise5 - copy and export those functions and create a test file for them, follwo this steps
export function distance1(p1: [number, number], p2: [number, number]): number {
  const x1 = p1[0]; // TODO: replace with the first element of p1
  const y1 = p1[1]; // TODO: replace with the second element of p1
  const x2 = p2[0]; // TODO: replace with the first element of p2
  const y2 = p2[1]; // TODO: replace with the second element of p2
  // TODO: calculate the distance
  return getDistanceBetweenTwoPoint2D(x1, y1, x2, y2);
}
// create extend help function for caclulate distance
function getDistanceBetweenTwoPoint2D(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
): number {
  const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
  return distance;
}
type TPoint2D = {
  x: number;
  y: number;
};

export function distance2(p1: TPoint2D, p2: TPoint2D): number {
  // const x1 = 0; // TODO: replace with the first element of p1
  // const y1 = 0; // TODO: replace with the second element of p1
  // const x2 = 0; // TODO: replace with the first element of p2
  // const y2 = 0; // TODO: replace with the second element of p2
  // TODO: use distructuring to get x and y from p1 and p2
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  // TODO: calculate the distance
  const distance = Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
  return distance;
}
// export { distance1, distance2 };
// 1. create file lesson2-homework.test.ts use src/index.test.ts as an example
// 2. import functions from lesson2-homework.js
// 3. create a test for each function for this cases
//   - distance between (1,1) and (4,5) should be 5
//   - distance between (0,0) and (0,0) should be 0
//   - distance between (1,1) and (1,2) should be 1
// 4. run the tests with `npm run test`

// Additional tasks - optional
// TODO: create a function which takes any string and returns the string reversed
function excerciseA(input: string): string {
  let reversed: string = input.split('').reverse().join('');
  return reversed;
}
console.log('test reversed "StringTest": ', excerciseA('StringTest'));

// TODO: create a function which takes an array of numbers and returns the sum of all numbers
function excerciseB(input: number[]): number {
  let summ: number = input.reduce((sum, curr) => sum + curr, 0);
  return summ;
}
console.log('test summ [1,2,3,4,5,6,7]: ', excerciseB([1, 2, 3, 4, 5, 6, 7]));

// TODO: create a function which takes an array of numbers and returns the average of all numbers
function excerciseC(input: number[]): number {
  let average: number =
    input.reduce((sum, curr) => sum + curr, 0) / input.length;
  return average;
}
console.log(
  'test average [1,2,3,4,5,6,7]: ',
  excerciseC([1, 2, 3, 4, 5, 6, 7]),
);

// TODO: create a function which takes an array of strings and returns the longest string
function excerciseD(input: string[]): string {
  let maxLength: number = 0;
  let maxWordIndex: number = 0;
  type TWordLength = (word: string, i: number) => void;
  const getWordLengt: TWordLength = (word, i) => {
    if (word.length > maxLength) {
      maxLength = word.length;
      maxWordIndex = i;
    }
  };
  input.forEach(getWordLengt);
  return input[maxWordIndex];
}
console.log(
  'test maxWordLength ["sun", "milk", "morning"]: ',
  excerciseD(['sun', 'milk', 'morning']),
);
