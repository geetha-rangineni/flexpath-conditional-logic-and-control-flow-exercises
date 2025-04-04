import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_01();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Comparison Operators
    
    1. Create two variables that hold different numbers.
    2. Then, check if one is bigger than the other using the 
       `>` (greater than) operator
    3. Log the result to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  let number1 = 10;
  let number2 = 5;
  let isBigger = number1 > number2;
  console.log(isBigger); // This will log 'true' since 10 is greater than 5

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Comparison Operators

    1. Create two variables, one assigned to a number and one
       assigned to a string. Then, log the result of comparing them
       with the `===` (strict equality) operator
    
  
  */
  // CODE IN THE OPEN LINES BELOW

  let number = 10;
  let string = "10";
  let isEqual = number === string;
  console.log(isEqual); // This will log 'false' because the types are different (number vs string)

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Conditionals

    1. Create a variable and store an even or odd number, your choice.
    2. Using the `%` (remainder) operator, write an if-else conditional
       that checks if a number is even. 
       
       If it is even, log "Even" to the console.
       If it is odd, log "Odd" to the console.
    
    3. Modify your initial variable code to assign a different number, 
       this time the opposite type (even or odd) than it was at first. 
       Run your code again and see how the result changes.

  */
  // CODE IN THE OPEN LINES BELOW

  let number = 8; // You can change this to an odd number like 7

  
  if (number % 2 === 0) {
      console.log("Even"); //  if the number is even
  } else {
      console.log("Odd"); //  if the number is odd
  }
  
  number = 7; // Now assigning an odd number
  
  
  if (number % 2 === 0) {
      console.log("Even"); // This will not execute
  } else {
      console.log("Odd"); // This will log "Odd"
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Logical Operators

    1. Create a variable and assign it a number between 10 and 20
    2. Write an if statement, using the >= (greater than or equal to), 
       <= (lesser than or equal to), and && (AND conditional) operators
       to check if this value is between 10 and 20.
       If it is, have the message "Between 10 and 20" be logged to the console.

    3. Modify your initial variable definition to be assigned a number 
       either less than 10 or greater than 20. Then run your conditional code 
       again. This time, nothing should log to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW

  let number = 15; // You can change this to any number between 10 and 20

  
  if (number >= 10 && number <= 20) {
      console.log("Between 10 and 20"); // if the condition is true
  }
  number = 25; 
  if (number >= 10 && number <= 20) {
      console.log("Between 10 and 20"); // This will not execute
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Logical Operators

    1. Create a variable named `color` that is assigned a color name as a string.
    2. Create an if-else conditional statement that checks if the `color`
       variable is either "red" or "blue". 

       If it is, log "Color is red or blue" to the console.
       If it is not, log "Color is not red or blue" to the console

       Reminder: The logical OR operator in JavaScript is `||`.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let color = "red"; // You can change this to any color name

  if (color === "red" || color === "blue") {
      console.log("Color is red or blue"); // if the condition is true
  } else {
      console.log("Color is not red or blue"); //  if the condition is false
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  /* 
   
    Exercise 6
    
    Logical NOT

    1. Create a variable and assign it a Falsy value
    2. Then, using the `!` (NOT conditional) operator, 
       log the result of ![variableName] to the console
    
    Use `!` to check if a value is falsy and log the result
  
  */

  // CODE IN THE OPEN LINES BELOW

  let variable = null; // You can also use other Falsy values like 0, "", undefined, or NaN
  console.log(!variable); // This will log 'true' because null is a Falsy value

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    Mathematical Operators
    
    1. Add two numbers and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 5; // First number
  let num2 = 10; // Second number
  let sum = num1 + num2;

  console.log(sum); // This will log '15'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  /* 
   
    Exercise 8
    
    Mathematical Operators
    
    1. Subtract one number from another and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 20; // First number
  let num2 = 8;  // Second number
  let difference = num1 - num2;
  console.log(difference); // This will log '12'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Mathematical Operators
    
    1. Multiply two numbers and log the result.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 6; // First number
  let num2 = 4; // Second number
  let product = num1 * num2;
  console.log(product); // This will log '24'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Mathematical Operators and Conditional Statements: 
    
    1. Divide one number by another.
       
       If it is even, log "Result is Even" to the console.
       If it is odd, log "Result is Odd" to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 20; // First number
  let num2 = 4;  // Second number
  let result = num1 / num2;


  if (result % 2 === 0) {
    console.log("Result is Even"); //  if the result is even
  } else {
    console.log("Result is Odd"); //  if the result is odd
  }

  // CODE IN THE OPEN LINES ABOVE
  }

function exercise_11() {
  /* 
   
    Exercise 11
    
    Remainder Operator
    
    1. Use the `%` (remainder) operator to find the 
       remainder of a division and log it.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let num1 = 10; // Dividend
  let num2 = 3;  // Divisor
  let remainder = num1 % num2;
  console.log(remainder); 

  // CODE IN THE OPEN LINES ABOVE
  }

function exercise_12() {
  /* 
   
    Exercise 12
    
    Exponentiation
    
    1. Use the `**` (exponentiation) operator to 
       calculate 2 to the power of 3 and log the result.
    2. Then use the operator again to find the value of 11 to the power of 3.5.
       Log the result
  
  */

  // CODE IN THE OPEN LINES BELOW

  let result1 = 2 ** 3;
console.log(result1); // This will log '8'
let result2 = 11 ** 3.5;
console.log(result2);
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Increment and Decrement a Variable

    1. Create a variable and assign it the number 5.
    2. Increment the variable using the `++` operator, and log the variable.
    3. Then, decrement the variable using the `--` operator twice. 
       Log the variable again.
    
  */

  // CODE IN THE OPEN LINES BELOW

  let number = 5;
  number++;
  console.log(number); // This will log '6'


  number--;
  number--;
  console.log(number);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Assignment Operators

    1. Create a variable named `score` and assign it a value over 21.
    2. Use the `+=` operator to add 14 to this variable and log the variable.
    3. Then, use the `-=` to subtract 7 from this variable. Log the variable again.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let score = 25; // You can assign any value over 21
  score += 14;
  console.log(score); // This will log '39'
   score -= 7;
  console.log(score); // This will log '32'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Assignment Operators
    
    1. Create a variable named `savings` and assign it a value over 500

    2. Use the `*=` operator to multiply the variable by 1.08. 
       Log the variable to the console.

    3. Then, use the `/=` operator to divide the variable by .5.
       Log the variable to the console again.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let savings = 600; // You can assign any value over 500


  savings *= 1.08;
  console.log(savings); //  the new value of savings after multiplication
  
  
  savings /= 0.5;
  console.log(savings); //  the new value of savings after division

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Falsy Values
    
    1. Write a conditional statement to check if an empty string is falsy.
       If it is, log the message "An empty string is falsy" to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let emptyString = "";

  if (!emptyString) {
      console.log("An empty string is falsy"); // This message will be logged
  }
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17
    
    Truthy Values: 
    
    1. Write a conditional statement to check if a string value of "false" is falsy.
       
       If it is, log the message "the string is falsy" to the console.
       Otherwise, log the message, "the string is not falsy" to the console.

  
  */

  // CODE IN THE OPEN LINES BELOW

  let stringValue = "false";

  
  if (!stringValue) {
      console.log("The string is falsy"); // This message will not be logged
  } else {
      console.log("The string is not falsy"); // This message will be logged
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18
    
    Objects
    
    1. Create an object and assign it to a variable.
    2. Then create another variable, and assign it the first variable as a value.
    3. Then, using the `===` operator, check if the first and second varable 
       are strictly equal. Log the result to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let person = {
    name: "Alice",
    age: 30
};


let anotherPerson = person;
let areEqual = (person === anotherPerson);
console.log(areEqual); // This will log 'true'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19

    Strict vs. Loose Equality
    
    1. Compare `undefined` and `null` using both `==` and `===`.
       Log both results to the console.
    
  
  */

  // CODE IN THE OPEN LINES BELOW

  let looseEquality = (undefined == null);
  console.log("Loose Equality (undefined == null):", looseEquality); // This will log 'true'
  
  let strictEquality = (undefined === null);
  console.log("Strict Equality (undefined === null):", strictEquality); // This will log 'false'
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_20() {
  /* 
   
    Exercise 20
    Switch Statement: 

    1. Create a variable named `fruitColor` and 
       assign it a string for a color name.

    2. Then, write a switch statement that will log "Apple" if the 
       fruitColor is red, "Banana" if the fruit color is yellow, and 
       "Unknown fruit" as a default condition.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let fruitColor = "red"; // You can change this to "yellow" or any other color

  
  switch (fruitColor) {
      case "red":
          console.log("Apple"); 
          break;
      case "yellow": 
      default:
          console.log("Unknown fruit"); //  if fruitColor is neither red nor yellow
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_21() {
  /* 
   
    Exercise 21
    
    Nested Conditionals: 

    1. Create a variable that stores a positive or negative number.

    2. Then, create a nested conditional (using if, else if, and else) to
       log "Positive" if the number is positive, "Negative" if the number
       is negative, and "Zero" otherwise.
  
  
  */

  // CODE IN THE OPEN LINES BELOW

  let number = 10; 
 
  if (number > 0) {
      console.log("Positive"); 
  } else if (number < 0) {
      console.log("Negative"); 
  } else {
      console.log("Zero"); 
  // CODE IN THE OPEN LINES ABOVE
}

function exercise_22() {
  /* 
   
    Exercise 22
    
    Ternary Operator
    
    1. Create a variable named `age` and assign it a number between 12 and 22.
    2. Then, create a variable named `canVote` that is assigned a ternary operator
    with the following return conditions:
      - if `age` is greater than or equal to 18, return "Yes, can vote"
      - Otherwise, return "No, too young"
    
    3. Then log the `canVote` variable to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let age = 19; // You can change this to any number between 12 and 22


  let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";


  console.log(canVote);

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_23() {
  /* 
   
    Exercise 23
    
    Combining Logical Operators

    1. Create a variable named `isProgramMember` and assign it a value of true or false.
    2. Create a variable named `age` and assign it a value between 10 and 85

    3. Write a condition that checks if isProgramMember is true AND that 
       their age is below 14 OR over 65
    
       Write this condition in one line using parenthesis, 
       the OR `||` operator, and the AND `&&` operator.

    4. If the condition returns true, log 
       "Eligible for special renewal discount" to the console.
        Otherwise, log "Not eligible for special renewal discount" to the console.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let isProgramMember = true; 
  let age = 12; 
  if (isProgramMember && (age < 14 || age > 65)) {
    
  console.log("Eligible for special renewal discount");
  } else {
  console.log("Not eligible for special renewal discount");
  }

  // CODE IN THE OPEN LINES ABOVE
  }

function exercise_24() {
  /* 
   
    Exercise 24

    1. Create a variable named `day` and assign it the name of a day of the week.

    2. Create a switch statement that uses cascading `case` statements to print 
      "Weekend" if the day falls on the weekend. Otherwise, print "Weekday" if 
      it does not.
  
  */

  // CODE IN THE OPEN LINES BELOW

  let day = "Saturday"; 

  
  switch (day) {
      case "Saturday":
      case "Sunday":
          console.log("Weekend"); 
          break;
      default:
          console.log("Weekday"); 
  }

  // CODE IN THE OPEN LINES ABOVE
}
}
