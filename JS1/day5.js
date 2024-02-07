let array = [1, 2, 3, 4, 5]
const multiplier = 2
let updated_array = array.map(function(number) {
    return number * multiplier
});
let final_array = updated_array.filter(function(number) {
    return number % 2 == 0
});
for (let i = 0; i < final_array.length; i++) {
    console.log(final_array[i]);
}