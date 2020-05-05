// The best-practice is to pull all the elements into variables, in order to avoid
// searching the HTML tree for these elements more than once:
let reset - button = document.querySelector("#reset-button");
let teamone - shoot - button = document.querySelector("#teamone-shoot-button");
let teamtwo - shoot - button = document.querySelector("#teamtwo-shoot-button");
// This line says, "I want to listen for someone to CLICK my
// reset-button, and any time I 'hear' that event occur,
// I want some code to run.
reset - button.addEventListener("click", function () {
    // Any code you write in here, will run every time incrementButton
    // is clicked.
    // Run the console.log function to display some text in the console:
    console.log("reset button clicked");
})
teamone - shoot - button.addEventListener("click", function () {
    console.log("teamone-shoot-buton clicked");
    // Calculate the new value for our counter:
    let newCounterValue = Number(counter.innerHTML) + 1;
})
teamtwo - shoot - button.addEventListener("click", function () {
    console.log("teamtwo-shoot-button");
    // Calculate the new value for our counter:
    let newCounterValue = Number(counter.innerHTML) + 1;
    // Calculate the new value for our counter:
    counter.innerHTML = newCounterValue;
})