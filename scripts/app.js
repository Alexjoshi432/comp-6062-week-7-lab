let input = document.querySelector("#numberInput")
console.log(input.innerHTML);

input.addEventListener("input",function(){
    console.log("user typed: "+input.value);
    if(input.value>=10 || input.value<=-10)
    {
        alert("The number should be -10 and 10")
    }
})
const fruit = {
    fruitName : 'Apple',
    fruitColor : 'Red',
    fruitTaste : 'Sweet'
};
let fruitName = document.querySelector("#fruitName");
console.log(fruitName.innerHTML);
fruitName.innerHTML =`Name: ${fruit.fruitName}` ;

let fruitColor = document.querySelector("#fruitColor");
console.log(fruitColor.innerHTML);
fruitColor.innerHTML = `Color:${fruit.fruitColor}`;

let fruitTaste = document.querySelector("#fruitTaste");
console.log(fruitTaste.innerHTML);
fruitTaste.innerHTML = `Taste:${fruit.fruitTaste}`;

