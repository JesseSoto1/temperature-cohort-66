console.log("functions")

//function declaration

function sayHello(){
    console.log("Hello cohort 66");
}


// call,=/trigger/run/execute fn (code, console, user)
sayHello();

// example 2 FN with 1 parameter
function greetBird(birdName){
    document.getElementById("results").innerHTML+=`<li>${birdName}</li>`;
}

greetBird("Pancho");
greetBird (" Pancho ");

//example FN with 2 parameters

function greetPlayer(firstName, lastName){
    document.getElementById("results").innerHTML+=`<p> Welcome back ${firstName} ${lastName}</p>`;

}

greetPlayer("Robert", "Rife");
greetPlayer("Ariana","Osuna");
greetPlayer("Jesse", "Soto");

function doubleScore(score){
    let total = score * 2;
    console.log(total);
    document.getElementById("results").innerHTML+=`<p> score = ${total }</p>`;

}
doubleScore(3);

// example FN with prompt

function askCharacterName(){
     let characterName = prompt("Enter your name");
console.log(characterName);
}

// triggered from console

// example 5. FN with default parameters
function add(num1=0,num2=0){
    let total=num1+num2;
    console.log(total);

}

add(2,4);
add(3);
add();

function combineNames(firstName,lastName){
    let name=firstName+lastName;
    console.log(name);

}

combineNames("Alice","Johnson");
combineNames(" Alice ");
combineNames();


// function convertToSeconds(min){
    //let sec = min * 60;
    ////console.log(`${min} mins are ${sec} sec`);
//}
//convertToSeconds(3);


function convert(){
    console.log("Successfuly connection to the server");
    let min = prompt("Enter mins:");
    console.log(min);
    let sec = min * 60;
    console.log(sec);
    document.getElementById("results").innerHTML+=`<p> seconds = ${sec}</p>`;
}
