

let resetButton = document.querySelector("#reset-button");
let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamoneNumshots = document.querySelector("#teamone-numshots");
let teamoneNumgoals = document.querySelector("#teamone-numgoals");
let teamtwoNumshots = document.querySelector("#teamtwo-numshots");
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals");
let numresets = document.querySelector("#num-resets")

// TODO 1: Shoot button represents a shoot for that team,
// Shoot should have a random chance of succeeding or falling
//  

//Hint 1: number of shoot should increase for every click of the "shoot"

// Any code you write in here, will run every time teamone shoot button
// is clicked.
// Run the console.log function to display some text in the console:

teamoneShootButton.addEventListener("click", function () {
    console.log("teamone-shoot-button-clicked");

    let newteamoneNumshotsValue = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = newteamoneNumshotsValue;

    //Hint 2: number of goal should only increase when the shot is successful,
    // Write an IF statement which determines whether
    // the user-supplied from #teamone-numshoot is increase or #teamtwo-numshot is increase

    let random = Math.random()
    console.log(random)

    if (random >= 0.2) {
        let newteamoneNumgoalsValue = Number(teamoneNumgoals.innerHTML) + 1
        teamoneNumgoals.innerHTML = newteamoneNumgoalsValue;

    }

})

teamtwoShootButton.addEventListener("click", function () {
    console.log("teamtwo-shoot-button-clicked");
    let newteamtwoNumshotsValue = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = newteamtwoNumshotsValue;
    let random = Math.random()
    console.log(random)



    if (random >= 0.2) {
        let newteamtwoNumgoalsValue = Number(teamtwoNumgoals.innerHTML) + 1
        teamtwoNumgoals.innerHTML = newteamtwoNumgoalsValue;

    }

})

// TO DO 2:clicking the "RESET" button should reset all the shot and goal counter,
//and add 1 to the number of reset.


// This line says, "I want to listen for someone to CLICK my
// reset-button, and any time I 'hear' that event occur,
// I want some code to run.

resetButton.addEventListener("click", function () {
    console.log("reset-button-clicked");
    let newNumresetsValue = Number(numresets.innerHTML) + 1;
    numresets.innerHTML = newNumresetsValue;
    teamoneNumshots.innerHTML = 0;
    teamtwoNumshots.innerHTML = 0;
    teamoneNumgoals.innerText = 0;
    teamtwoNumgoals.innerText = 0;
})

