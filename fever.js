

let temperature_string = prompt("Ingrese la temperatura en celsius");
let temperature = Number(temperature_string);
if(temperature >= 37.5) {
    console.log("Tiene fiebre");
} else {
    console.log("No tiene fiebre");
}