import inquirer from "inquirer"

let placeToVisit: string[] = ["Turkey", "Makkah", "Wenkore", "London", "Egypt"];
//print in original order
console.log("Original order:", placeToVisit);

//print array in alphabetical order
console.log("Alphabetical order:", placeToVisit.slice().sort());

//array is still in its original order
console.log("Original order after sorting:", placeToVisit);

//print array in reverse alphabetical order withoust changing the order of the original list
console.log(" Reverse alphabetical order:", placeToVisit.slice().sort());

//array is still in its original order
console.log("Original order after reverse sorting:", placeToVisit);

//reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:", placeToVisit);

//reverse the order of list again
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);

//sort array to it's sorted in alphabetical order
//reverse the order of list
placeToVisit.reverse();
console.log("Sorted in alphabetical order:", placeToVisit.slice().sort());

//sort to change array so it's stored in reverse alphabetical order
console.log("Sorted in reverse alphabetical order:", placeToVisit.slice().sort());