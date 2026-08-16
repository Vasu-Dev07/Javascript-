// String
// const str1 = "Rohitboy";
// const str2 = 'Rohit Negi';
// const day = 18;
// const str3 = `Strike is coming on ${day}`;

// console.log(str3);

// const str = `Hello Vasu`;

// console.log(str.length)
// console.log(str[1]);

// str[2] = "S";
// console.log(str)

// upper case
// const a = str.toUpperCase();
// const b = str.toLowerCase();
// console.log(b);

//  const str = `Hello Vasu`;

// console.log(str.indexOf('as'));
// console.log(str.lastIndexOf('as'));
// console.log(str.includes('as'));

// // slice 
// console.log(str.slice(2,7));
// console.log(str.slice(3));
// console.log(str.slice(-5,-2));


// const str = `Hello Vasu`

// console.log(str.substring(2,5));

// const a = "Vasu";
// const b = "Dev";
// const c = a+" "+b;
// console.log(c);

// console.log(24+"Vasu");
// console.log(24+"Vasu"+10);
// console.log(24+30+"Vasu");

// const str = `Hello there Vasu`;

// console.log(str.replaceAll("s",'n'));

// const user = "  Rohit  Negi ";
// console.log(user.trim());

// const names = "Rohit Mohit Suraj Rohan Anjali";

// console.log(names.split(" "))
// console.log(names.split(","))

const wow = new Date();

console.log(wow);
console.log(wow.toString());
console.log(wow.toISOString());
console.log(wow.toLocaleString());


// Local time chal rha
console.log(wow.getDay());
console.log(wow.getDate());
console.log(wow.getFullYear());
console.log(wow.getMonth());
console.log(wow.getHours());
console.log(wow.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());


// Timestamp
const now = Date.now();
const dates = new Date(1759275037293);
console.log(dates.toString());

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp