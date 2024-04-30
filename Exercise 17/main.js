let guestList = ["Ainy", "Misbah", "Aisha", "Nabeel", "Huda"];
//print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guest.");
//remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}
//print a message to each of the two people still on your list,
//letting them know they're still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
});
//remove last two names from the list
guestList.splice(0, guestList.length);
// print updated empty list
console.log("Updated list of guest");
export {};
