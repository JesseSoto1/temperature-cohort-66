// function celsiusFahrenheit(){
//     let C = prompt("Enter Degrees");
//     let F = C * 9/5 +32;


//     if (C){
//         F = C * 9/5 +32;
//     }else{
//         return "Error";
//     }

//     document.getElementById("results").textContent = "Converted Temperature:" + F;
// }

// function fahrenheitCelsius(){
//     let F = prompt("Enter Degrees");
//     let C = F - 32 * 5/9;


//     if (F){
//         C = F - 32 * 5/9;
//     }else{
//         return "Error";
//     }

//     document.getElementById("results").textContent = "Converted Temperature:" + C;
// }

// function generateTable(){
//     const table = document.getElementById
//     let tr="";
//     for(let C=1;C<11;C++){
//     let C = (F -32)*5/9;
    
//         tr += `
//         <tr>
//             <td>${C}</td>

            
//         </tr>
//         `;
//     }

//     table.innerHTML = tr;
// }





// function generateTable(){
//     const thermo = document.getElementById("temps");
//     for(let i=0;i<10;i++){
//         let level = document.createElement("div");
//         level.classList.add("level");
//         thermo.appendChild(level);
//     }
// }

//----used some help here to give me a better idea on hot to do both the convertion and generate the table.------//

function celsiusFahrenheit(){

    let temp = prompt("Enter degrees");
    let F = temp * 9/5 + 32;  
    let table = "<table border ='1'>";
    table += "<tr><td>" + temp + "</td><td>" + F.toFixed(1) + "</td><tr>";
    table += "</table>";
    document.getElementById("temps").innerHTML = table;
    document.getElementById("results").textContent = "Converted Temperature:" + F;
}    


// function fahrenheitCelsius(){

//     let temp = prompt("Enter degrees");
//     let C = temp - 32 * 5/9;

//     let table = "<table border = '1'>";
//     table += "<tr><th>Celsius</th><th>Fahrenheit</th></tr>";
//     table += "<tr><td>" + temp + "</td><td>" + C.toFixed(1) + "</td><tr>";
//     table += "</table>";
//     document.getElementById("temps").innerHTML = table;
//     document.getElementById("results").textContent = "Converted Temperature:" + C;
// }

function fillThermo(){
    const thermo = document.getElementById("thermo");
    for(let i=0;i<10;i++){
        let level = document.createElement("div");
        level.classList.add("level");
        thermo.appendChild(level);
    }
}

