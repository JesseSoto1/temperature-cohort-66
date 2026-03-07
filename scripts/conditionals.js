console.log("conditionals");
// if statement. yes no question

//---syntax---
//if(condition){
//code to be run if the condition is TRUE
//}

let result= 50;

if(result > 80){
    console.log("You passed the Exam!!!");
}

let result2= 50;
if(result== result2){
    console.log("The values are the same");
}
//// case 1: 5 == 5 true, true, true
// case 2: 5 == "5" - checks the value
// case 3: 5 === "5" - checks the value and type

// if-else statement condition (y/n)
// styntax
// if(condition){
//  code to be run if the condition is TRUE
//} else{
//  code to be run if the condtion is FALSE
//}

let points = 80;
if(points > 60){
    console.log("You passed the Exam!");
}else{
    console.error("You lose");
}

let waterTemp = 110;
if(waterTemp > 100){
    console.log("Boiling Hot");

}else{
    console.log("the water is not boiling");
}

// else-if statements
// styntax
// if(condition1){
//  code to be run if the condition is TRUE
//} else if(condition2){
//  code to be run if the condtion2 is TRUE
//}else {
// code to be run if conditions are FALSE
//}

function ageCalculator(){
    let age = 73;
    
    if(age < 13){
        console.log("Your are a child");
    }else if(age < 21){
        console.log("You are a teenager");
    }else if(age < 64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

function trafficLight(){
    let color = prompt("Enter color").toLocaleLowerCase;
    
    if(color = "green"){
        console.log("Go");
    }else if(color = "yellow"){
        console.log("Slow Down");
    }else if(color = "red"){
        console.log("Stop");
    }
}

function ticketPrice(){
    let age = prompt("Enter Age");
    
    if(age < 12){
        console.log("$5 dollars");
    }else if(age < 18){
        console.log("$ 8 dollars");
    }else if(age > 18){
        console.log("$ 10 dollars");
    }
}


function access(){
    let userRole = prompt("Enter User Role").toLocaleLowerCase;
    
    if(userRole == "Admin"){
        console.log("Full Access");
    }else if(userRole == "Editor"){
        console.log("Acces, but limited actions");
    }else{
        console.error("Stop, you dont have access");
        document.getElementById("results").innerHTML=`<p> F = ${F}</p>`;


    }

}
// clear css
// div.innerHTML
// function weather(){
//     let temp = prompt("Enter temp").toLocaleLowerCase;
    
//     if(temp < 15){
//         console.log("Put on a jacket");
//     }else if(temp >25){
//         console.log("Wear a sweater");
//     }else if( temp >25)
//         console.log("Put on a tshirt");
//     }

    
    
    
    function weatherOutFit(){
    const div = document.getElementById("results");
    let tmp = prompt("Enter a temperature");

    // clear the CSS
    div.classList.remove("cold","red");
    
    if(tmp < 15){
        div.innerHTML = "Jacket";
        div.classList.add("cold");
    }else if(tmp < 25){
        div.innerHTML ="Sweater";
    }else{
        div.innerHTML ="T-Shirt";
        div.classList.add("hot");
    }
}

weatherOutFit();
—— HTML ——
<button onclick="weatherOutFit()">Weather outfit</button>

    <div id="results">

    </div>

— CSS —
.cold{
    color:blue;
}

.hot{
    color:red;
}