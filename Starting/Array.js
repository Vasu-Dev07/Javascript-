// Array;

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

let marks = [100,50,70,80,90];



console.log(marks);
console.log(marks.length);

let arr = [100,30,"Rohit",true];

// console.log(arr[2]);
// console.log(typeof arr);

// arr[1] = 90;
// console.log(arr);

// push : Insert element at end

arr.push(90);
arr.push("Strike");

console.log(arr);

// pop operation: Delete element from end
arr.pop();
console.log(arr);

// Starting add kar sakta hu, delete the element at first place

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // delete kar sakta hu

// arr.shift();
// console.log(arr);


// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let num of arr){
//     console.log(num);
// }

// let arr = [10,30,50,90,11];
// let arr2 = arr;

// arr2.push(30);

// console.log(arr);
// Object(non primitive): Copy by reference hote hai
// Primitive: Copy by value

// const arr = [10,30,50,90,11];
// arr[2] = 30;



// console.log(arr);


// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(2,4);
// console.log(arr);
// const arr3 = arr.splice(1,3,"Rohit",19);
// console.log(arr3);

// const arr = [10,30,50,90,11];
// const arr2 = ["Rohit",11,true];
// const arr4 = [90,4,false];

// arr.push(arr2);
// const arr3 = arr.concat(arr2,arr4);
// const arr3 = [arr,arr2,arr4];

// spread operator

// const arr3= [...arr,...arr2,...arr4];
// console.log(arr3);
// console.log(arr3);


// const names = ["Alice", "Rohit","Bob","Mohit", "Charlie",];

// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("Bob"));
// console.log(names.includes("Bobs"));

// names.sort();
// names.reverse();

// console.log(names);