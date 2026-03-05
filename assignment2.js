function convert(){
    console.log("Successfuly connection to the server");
    let Celsius = prompt("Enter Celsius:");
    console.log(Celsius);
    let F=Celsius * 9/5 + 32;
    console.log(F);
    document.getElementById("results").innerHTML=`<p> F = ${F}</p>`;


}
