const newElement = document.createElement("h2");
newElement.textContent = "Ohh I can add h2 through js..";
newElement.id = "second";


// select elemenet
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement)

const newElement2 = document.createElement('h3');
newElement2.textContent = "This is h3 I can add befor and after anything..";
newElement2.id = "third";
// newElement2.className = "diwali";
// newElement2.className += " Holi";
newElement2.classList.add("diwali");
newElement2.classList.add("holi");
// newElement2.classList.remove("diwali");

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";
newElement2.setAttribute("hello","ji");


element.before(newElement2);

console.log(newElement2.getAttribute("hello"));