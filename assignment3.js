// function convertTemperature(){
//     let temp = prompt("Enter degrees with denomition Ex. C or F");
//     let C = temp - 32 * 5/9;
//     let F = temp * 9/5 + 32;
  
//     if(C== temp + ("F")){
//         console.log(C);
//     }else if (F==temp) +("C");
//         console.log(F);
//         document.getElementById("results").innerHTML=`<p> T = ${C,F}</p>`;
//     }
   
    
    
    // if(temperature = ){
    //     console.log("F");
    // }else if(temperature = Fahrenheit){
    //     console.log("C");
    // }else{
    //     console.error("Wrong Value");
    //     document.getElementById("results").innerHTML=`<p> F = ${F}</p>`;

    // }   
// function convertTemp(temp, scale){
//     let results;

//     if (scale==="C"){
//         return (temp * 9/5 +32);
//     }else if (scale === "F"){
//         return(temp - 32)* 5/9;
//     }else{
//         return "invalid scale";
//     }

//     return results;
// }
function startConvert(){
    let degrees = prompt("Enter Temperature");
    let scale = prompt("Enter Scale C or F");
    let total;
    // let converted = convertTemp(degrees, scale);

    if (scale==="C"){
        total = degrees * 9/5 +32;
    }else if (scale === "F"){
        total= degrees - 32* 5/9;
    }else{
        return "invalid scale";
    }

    document.getElementById("results").textContent = "Converted temperature:" + total;
}