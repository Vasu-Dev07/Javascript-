// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }


const element = document.getElementById("first");
// element.onclick = function handleClick(){
// //    element.textContent = "Strike is Coming";
//     element.style.backgroundColor="pink";
// }

// element.onclick = function handleClick(){
//    element.textContent = "I am the best";
// }

// element.addEventListener('click',()=>{
//     element.textContent = "Strike is Coming";
// })

// element.addEventListener('click',()=>{
//     element.style.backgroundColor="brown";
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }