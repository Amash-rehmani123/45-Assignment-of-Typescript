//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//Function to make magicians great through.map() it will modify array
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//Define an array of magicians name
let magician_names = ["Harry Poter", "Paul Daniels", "David Blaine"];
//Call make great function to modify magicians names
let great_magicians = make_great(magician_names);
//Call show magicians that show modified list of magicians
show_magicians(great_magicians);
export {};
