// simple interactive feature, like a button that changes the background color when clicked.

// Wit until the DOM is fully loaded. Ensures the script runs after html is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID=colorButton
    const button = document.getElementById("colorButton");

    // Add an event listener for the button click
    button.addEventListener("click", function() {
        // Change the background color to a random color
        document.body.style.backgroundColor = getRandomColor();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color;
    }
});