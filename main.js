/******************************************************************************
Functions and Methods assignment

Read the assignment text CAREFULLY. Do NOT change the name of any of the
functions in this assignment, it will disable the automated unit testing.

0.

Complete the function below:

Return true from this function to see how the testing works

Read the terminal output before and after to see the difference

******************************************************************************/

export function start() {
  //your code here

 return true

};

/******************************************************************************
1.

Complete the function below:

The function should take in a number as a parameter and return
"Odd" if the number received is an odd number and "Even" if the number
received is an even number.

HINT: Use the modulo operator (%) Google it! 😊
******************************************************************************/

export const oddOrEven = () => {
  //your code here

if (number % 2 === 0) {
  return "Even";
}
else {
  return "Odd";
}

};

/******************************************************************************
2.

Complete the function below:

The function should take in a string as a parameter and return the string 
in upper case with an exclamation mark at the end.

Example: "This is cool" should return "THIS IS COOL!"

******************************************************************************/

export function makeMeLoud(text) {
  //your code here

text = text.toUpperCase();
text += "!";

return text;

}

/******************************************************************************
3.

Complete the function below:

The function should take in 2 parameters:

 - A name (string)
 - An hour of the day (number)

The function should return:
"Invalid time" if the hour received is less than 0
"Good night (name received)" if the hour received is 0-5
"Good morning (name received)" if the hour received is 6-11
"Good day (name received)" if the hour received is 12-17
"Good evening (name received)" if the hour received is 18-23
"Invalid time" if the hour received is greater than 23


******************************************************************************/

export const greeter = (name, hour) => {
  //your code here

if (hour >= 0 && hour <= 5) {
  return "Night Night" + "" + name + "mate";
}

if (hour >= 6 && hour <= 11) {
  return "Morning" + "" + name + "mate";
}

if (hour >= 12 && hour <= 17) {
  return "Avro" + "" + name + "mate";
}

if (hour >= 18 && hour <= 23) {
  return "Evnen" + "" + name +"mate";
}
return "Invalid Time Mate"

};

/******************************************************************************
4.

Complete the function below:

The function should take in an array as a parameter, and return the array 
with the first and last index removed.

Example 1: ["Red", "Green", "Blue", "Yellow"] should return ["Green", "Blue"]

Example 2: ["One", "Two", "Three", "Four", "Five", "Six"] should return
["Two", "Three", "Four", "Five"]
******************************************************************************/

export function arrayTrimmer(array) {
  //your code here
if (array.length >= 2) {
  array = array.slice (1, -1);
}
else {
  return [];
}
return array;
}

/******************************************************************************
5.

Complete the function below:

The function should take in a string as a parameter.

Use string methods on the text parameter you receive to do the following:
 - Replace the word 'hard' with 'fun'
 - Remove the whitespace from the beginning and end of the string
 
Then return the string.

Example1: "  Javascript is hard   " should return "Javascript is fun"
Example2: " It's hard to use methods " should return "It's hard to use methods"
Example3: "   hard        " should return "fun"

******************************************************************************/

export const cleanAndFun = (myStringtring) => {
  //your code here
  myString = myString.replace(`hard`, 'fun').trim();
  return myString;

};

/******************************************************************************
6.

Complete the function below:

The function should take in an array as a parameter.

The automatic testing will test your function with the following array:
["Spider-Man", "Thor", "Hulk", "Doctor Strange", "Iron Man", "Black Widow"]

Use array methods to do the following:

 - Remove the first hero of the array (Spider-Man)
 - Replace "Doctor Strange" with "Skrull"
 - Use the splice method to remove Thor and Hulk and add "Captain America"
 - Join the array to a string with "💪" between each hero

 Return the resulting array.
******************************************************************************/

export function marvelEditor(array) {
  //your code here

  array.shift();
  array.splice(1, array.indexOf("Doctor Strange"), "Skrull");
  array.splice(0, 1, "Captain America");
  array = array.join("💪");
  
   return array;

}

/******************************************************************************
7.

EXTRA CHALLENGE

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 1 parameter.

If the parameter received is a string: 
Return the string with "😎" added to the beginning and end

If the parameter received is a number:
Double it, convert it to a string and return it with "😎" added to the 
beginning and end.

If the parameter received is a boolean:
If the parameter received is true, return "😎Yeah😎". If the parameter received
is false, return "😎Chill😎"

If the parameter received is any other datatype:
Return "😎Primitive values only😎"

******************************************************************************/

export function coolMaker(paramater) {
  //your code here

  if (typeof parameter === "string") {
    return `😎${parameter}😎`;
  }

  if (typeof parameter === "number") {
    return `😎${parameter * 2}😎`;
  }

  if (typeof parameter === "boolean") {
    if (parameter) {
      return "😎Yeah😎";
    }
    return "😎Chill😎";
  }

  return "😎Primitive values only😎";
}



/******************************************************************************
8.

EXTRA CHALLENGE #2:

This is not mandatory, only for those who want an extra challenge.

Complete the function below:

The function should take in 2 parameters, 1 array and 1 string.

Inside your function, check if the array received contains the string received.
If it does, remove that element from the array and return it.

If the array does not contain the string, add that string to the end of the 
array and return it.

Example1: (["Red", "Green"], "Blue") --> ["Red", "Green", "Blue"]
Example2: (["Red", "Green", "Blue"], "Green")) --> ["Red", "Blue"]
Example3: (["One", "Two", "Three"], "Four") --> ["One", "Two", "Three", "Four"]
Example4: (["One", "Two", "Three"], "Two") --> ["One", "Three"]
******************************************************************************/

export const addOrRemove = () => {
  //your code here

  const string = str;
  const arr = array;
  if (arr.includes(string)) {
    arr.splice(arr.indexOf(string), 1);
    return arr;
  } else {
    arr.push(string);
    return arr;
  }

const item = "Green";
const array = ["Red", "Green", "Blue"];
console.log(addOrRemove(array, item));

};
