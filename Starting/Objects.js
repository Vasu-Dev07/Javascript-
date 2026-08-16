// object
// key value
const user = {
   name: "Vasu",
   age: 20,
   emailId: "vasu@gmail.com",
   amount: 3400,
   "home address": "dhanbad"
}


console.log(user["name"]);
console.log(user.age);
console.log(user["age"]);
console.log(user["home address"]);
console.log(typeof user);
// CRUD operation: Create read update delete


console.log(user.age);

//  update
user.aadhar = 1234;
user.amount = 5000;

console.log(user);

// delete
delete user.emailId;
console.log(user);