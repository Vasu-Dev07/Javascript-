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

const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
}

const user2 = user;
user2.age = 90;

console.log(user);

Important

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let keys in user){
    console.log(keys, user[keys]);
}

user.keys user["name"] user["age"]