//Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items) {
    console.log("\nMaking a sandwich with the folloing items: \n");
    items.forEach(singleItem => console.log("-" + singleItem));
    console.log("\nNow Enjoy Sandwich");
}
//Call the function 3 times with 3 different number of argumemts
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Chicken", "bread", "Butter");
makeSandwich("Bread", "Tomato", "Lettuce", "Chicken", "Cheese", "Mayo", "Egg");
export {};
