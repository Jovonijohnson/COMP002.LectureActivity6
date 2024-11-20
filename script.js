// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Check if color value is present in local storage and log it
    const savedColor = localStorage.getItem('colorInput'); // Get saved color from local storage
    if (savedColor) {
        console.log('Saved color:', savedColor); // Log the saved color if it exists
    }
    // Get the form and color input elements
    const form = document.getElementById('myForm'); // Get the form element by ID
    const colorInput = document.getElementById('colorInput'); // Get the color input element by ID

    // Add event listener to the form to prevent default submit action
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
