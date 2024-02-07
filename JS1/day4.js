// Get the button element by its id
let button = document.getElementById('Change text');
const text = 'Text has been changed'


// Add click event listener to the button
button.addEventListener('click', function() {
    // Change the text content of the element
    button.textContent = text;
});