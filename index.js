let input = document.getElementById("input-el")
const convertbtn = document.getElementById("convert-btn")
let lengthVariable = document.getElementById("length-el")
let volumeVariable = document.getElementById("volume-el")
let massVariable = document.getElementById("mass-el")
convertbtn.addEventListener("click",function(){
    renderLength(input.value)
    renderVolume(input.value)
    renderMass(input.value)
})

function renderLength(inputVal){
    let listVariable = `
        ${inputVal} meters = ${(inputVal * 3.28084).toFixed(3)} Feet | ${inputVal} Feet = ${(input.value * 0.3048).toFixed(3)}meters
    `
    lengthVariable.innerHTML = listVariable
}

function renderVolume(inputVal1){
    let listVariable = `
        ${inputVal1} liters = ${(inputVal1 * 0.264172).toFixed(3)} Gallons | ${inputVal1} gallons = ${(input.value * 3.78541).toFixed(3)}liters
    `
    volumeVariable.innerHTML = listVariable
}

function renderMass(inputVal2){
    let listVariable = `
        ${inputVal2} kilos = ${(inputVal2 * 2.20462).toFixed(3)} Pounds | ${inputVal2} Pounds = ${(input.value * 0.453592).toFixed(3)}Kilos
    `
    massVariable.innerHTML = listVariable
}