const prompt=require("prompt-sync")({sigint:true}); 
let number = prompt("Enter the number ");
if(number<=0)
console.log("Error->The number is not positive");
else
{
    for(let i=1;i<=10;i++)
    {
        console.log(number*i)
    }
}