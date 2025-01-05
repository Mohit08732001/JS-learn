const accountId = 12333
let accountEmail = "mohit@gmail.com"
var accountPassword = "12345"
accountCity = "Shimla" // Not a good method
let accountState

// accountId = 2 // not allowed
accountEmail = "mg@gmail.com"
accountPassword = "2121"
accountCity = "Delhi"

console.log(accountId)

/*
Prefer not to use var, because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])