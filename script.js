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
               // Log the current value of the color input
               const colorValue = colorInput.value; // Get the current value of the color input
               console.log('Current color value:', colorValue); // Log the color value to the console
               
               // Save the color value to local storage
               localStorage.setItem('colorInput', colorValue); // Save the color value to local storage
           });
       });
       
