// assets/js/app.js

document.addEventListener('DOMContentLoaded', function () {
    // Your specific JavaScript code goes here

    // Example: Log a message to the console
    console.log('App.js loaded successfully!');

    // Example: Attach an event listener to a button
    const myButton = document.getElementById('myButton');
    if (myButton) {
        myButton.addEventListener('click', function () {
            alert('Button clicked!');
        });
    }

    // Additional JavaScript logic for your application
});
