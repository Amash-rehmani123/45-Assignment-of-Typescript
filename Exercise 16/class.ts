let guestList: string[] = ["Ainy", "Aisha", "Nabeel", "Abdul Latif"]
console.log("Great news! we found a bigger table");

//unshift
guestList.unshift("Sania");

//splice
guestList.splice(Math.floor(guestList.length/2),0, "Anus")

//push
guestList.push("Huda");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner.`);})
