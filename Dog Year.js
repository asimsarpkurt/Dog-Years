//I conducted this project thanks to the content of Codecademy
//With this project, by entering your age, you can learn how old would you be if you were a dog. 
/*Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.*/
//Define your age
const myAge = 23;
//Define earlyYears as a dog, keep in mind that this variable can be changed
let earlyYears = 2;
earlyYears = earlyYears * 10.5;
//Since we already accounthe the first two years as earlyYears, we can substract it and define as a new variable
let laterYears = myAge - 2;
//In order to convert it to dogs age we multiplied by 4 
laterYears *= 4;
console.log(laterYears, earlyYears);
//This equation will indicate your age as a dog by summing up the early and late years since dogs age up in different levels of acceleration.
let myAgeInDogYears = earlyYears + laterYears;
//Writing your name
let myName = 'Sarp'.toLowerCase();
//Statement that will print out the output
console.log('My name is ' + myName + '. I am ' + myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.')