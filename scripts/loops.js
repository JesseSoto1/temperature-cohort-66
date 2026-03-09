console.log("Loops");

//FOR syntax----

//for(start;condition;interval){
//code repeated
//}

// function multiTable(){
//     const num = 2
//     for(let i=0;i<11;i++){
//         console.log(`${num} x ${i} =${i*2}`);
//     }
// }

// multiTable();



// for(let i=0;i<21;i++){
//     console.log(`${i}`);
// }

// if(i==1){
//     console.log("Gold");
// }else if()

// console.log(`${i}`)
// }

// create a loop to display the numbers from 1 to 20.
// for(let i=1;i<21;i++){

//     if(i==1){
//         console.log("Gold");
//     }else if(i==2){
//         console.log("Silver");
//     }else if(i==3){
//         console.log("Bronze");    
//     }else{
//         console.log(`${i}`);

//     }

// }
// function generateTable(){
//     for(let c=1;c<11:c++){
//         generateTable.
//     }
// }

function generateTable(){
    const table = document.getElementById("temps"); 
    let tr="";
    for(let c=1;c<11;c++){
        console.log(c);
     let f = (c*9/5) +32;
        tr += `
        <tr>
            <td>${c}</td>
            <td>${f}</td>
            
        </tr>
        `;
        console.log(tr);
    }

    table.innerHTML = tr;
}

function fillThermo(){
    const thermo = document.getElementById("thermo");
    for(let i=0;i<10;i++){
        let level = document.createElement("div");
        level.classList.add("level");
        thermo.appendChild(level);
    }
}