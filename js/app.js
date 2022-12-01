
alert("Javascript is working");

// alert("Welcome ");
// var name = prompt("What is your name?");
// console.log("Welcome " + name);

//get all div element with class name of "block"
let divblocks = document.getElementsByClassName('block');

//this gives us a array of 3 divs 
console.log(divblocks);

console.log("The total number of div is " + divblocks.length);

//to get the first div use index 0
// console.log(divblocks[0].style.backgroundColor = "red");
// console.log(divblocks[1].style.backgroundColor = "green");
// console.log(divblocks[2].style.backgroundColor = "yellow");

// divblocks[0].style.backgroundcolor = "red";
// divblocks[1].style.backgroundColor = "green";
// divblocks[2].style.backgroundColor = "yellow";

// let children = divblocks[0].childNodes;
// console.log(children[1]);


for (let i = 0; i < divblocks.length; i++) {
    // console.log(divblocks[i].style.backgroundColor = "red");
    // let children = divblocks[i].childNodes;
    // console.log(children[1].style.color="red");            
    // console.log(children[3].style.color="green");  

    // console.log(divblocks[i].getElementsByTagName('h3')[0].innerHTML = "New Heading");  

}
