//get information form the DOM
let convert = document.getElementById("meters-feet")
let gallOn = document.getElementById("gallons-litters")
let btn = document.getElementById("btn-convert")
let kg = document.getElementById("kilos-pound")
let error= document.getElementById("error")


// function gathers the value form the text box
function getValue(){
    let num = document.getElementById("number-center-of-purple").value
    return num
}
// does the first converstion meters - feet

function lengthFoot(){
    let con = getValue()
    if (!(isNaN(con))){
        con*= 0.3048
        convert.textContent=`${getValue()} meters = ${con} feet |  ${con} feet =  ${getValue()} meters`
        error.textContent = " "
    }
    else{
        error.textContent = "Enter a real number"
    }

}
// liters- gallons
function valumeGallon(){
    let con = getValue()
    if(!(isNaN(con))){
        con*=3.78541
        gallOn.textContent=`${getValue()} liters = ${con} gallons | ${con} gallons = ${getValue()} liters`

    }
    else{
        error.textContent = "Enter a real number"
    }
}

// Kiolgrams - pounds
function MassKiolgrams(){
    let con = getValue()
    if(!(isNaN(con))){
        con*=0.453592
        kg.textContent=`${getValue()} kilos = ${con} pounds | ${con} pounds = ${getValue()} kilos`
        
    }
    else{
        error.textContent = "Enter a real number"
    }
    
}
