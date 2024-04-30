//Creating a Array with 5 values
let userNames = ["Anus", "Yazzan", "Admin", "Daniyal", "Haris"]

//Remove all values from our Array Now our Array is empty
userNames = []

//If Statement for checking Length of our Array is empty?
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users!")
}else{
    //If Array is not empty use ForEach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin" ) {
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}