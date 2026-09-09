// async await
// aysnc function always return a promise
// async function greet(){
//     return "Rohit";

//     // return new Promise((resolve,reject)=>{
//     //     reject("Rohit");
//     // })
// }

// const response = greet();
// // console.log(response);
// response.then((data)=>console.log(data))
// .catch((error)=>{
//     console.log("Error:", error);
// })


// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));

// async function github() {


//     try {
//     const response = await fetch("https://api.github.com/users");
//     if(!response.ok){
//         throw new Error("Data is not persent");
//     }
