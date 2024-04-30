import inquirer from "inquirer";

//Define variables
let pen = "pen";
let uppercasePen = "PEN";
let thirty = 30;
let fourty = 40;
let vegetables = ["Potato", "Carrot", "Ladyfinger"];

//Tests for equality and inequality with strings
console.log("Is pen is equal to pen?"),
console.log(pen == "pen");

console.log("\nIs pen is not equal to pen?"),
console.log(pen != "pen");

//Tests using the lower case function
console.log("Is PEN is equal to pen after converting to lowercase?");
console.log(uppercasePen.toLowerCase() == "pen");

console.log("\nIs PEN is not equal to pen after converting to lowercase?");
console.log(uppercasePen.toLowerCase() != "pen");

//Numerical tests
//Equal to
console.log("\nIs thirty is equal to fourty?");
console.log(thirty == fourty);
//Not Equal to
console.log("\nIs thirty is not equal to fourty?");
console.log(thirty != fourty);
//Greater than
console.log("\nIs thirty is greater than zero?");
console.log(thirty > 0);
//Less than
console.log("\nIs fourty is less than thirty?");
console.log(fourty < 30);
//greater tha or equal to
console.log("\nIs thirty is greater than or equal to 5?");
console.log(thirty >= 5);
//Less tha or equal to
console.log("\nIs fourtyy is less than or equal  to 30?");
console.log(fourty <= 10);

//Test using "and" & "or" operators
//Using && (and) 
console.log("\nIs fourty is not equal to 30 and fourty is greater than 30");
console.log(fourty != 30 && 40 > 30);

console.log("\nIs fourty is not equal to 30 and fourty is greater than 30");
console.log(fourty != 30 && 40 > 50);

//Using || (OR)
console.log("\nIs 40 is greater than 50 OR 40 is equal to 40");
console.log(40 >50 || 40 == 40);

console.log("\nIs 40 is greater than 50 OR 40 is not equal to 40");
console.log(40 >50 || 40 != 40);

//Test whether an item is include in array
console.log("\nIs carrot is include in my vegetables array");
console.log(vegetables.includes("carrot"));
//Not include
console.log("\nIs carrot is not include in my vegetables array");
console.log(vegetables.includes("carrot"));





