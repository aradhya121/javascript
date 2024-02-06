function Convert_temperature(temperature)
{
    return (temperature*9/5)+32
}
const prompt=require("prompt-sync")({sigint:true}); 
let temperature = prompt("Enter the Temperature in Celsius ");
console.log("The temperature converted to Fahrenheit is",Convert_temperature(temperature).toFixed(2));
