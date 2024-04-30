//array of Current users
let current_users = ["Arfeen", "Shafay", " Saira", "muqaddas", "Hermain"]

//Array of New users
let new_users = ["Arfeen", "Haina", " Fatima", "Muqaddas", "Zahid"]
//Loop through new-users to check for usernames avaibility
new_users.forEach(new_one_user => {

    //Making a condition for username already exist and save in our_condition variable
    let our_condition =current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    //Print different messages using If-Else Statements
    if(our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})

