alert("You are in an escape room.  Please choose the number corresponding to the decision you will make");

const userDecision = parseInt(prompt("1. Find the key. 2. Put your hand in the hole. 3. Escape the room."));

if (isNaN(userDecision) || userDecision < 1 || userDecision > 3) {
    alert("You have failed the game. Next time please input either 1, 2, or 3");
}   else if (userDecision === 2) {
    alert("Uh-oh...you killed yourself");
}   else if (userDecision === 3) {
    alert("You were unable to open the door");
}   else if (userDecision === 1) {
    alert("You have found the key");
    alert("What will you do now?");
const userWithKeyDecision = parseInt(prompt("1. Use the key to escape the room. 2. Put your hand in the hole."));
if (isNaN(userWithKeyDecision) || userWithKeyDecision < 1 || userWithKeyDecision > 2) {
    alert("You have failed the game. Next time please input either 1, or 2");
}   else if (userWithKeyDecision === 1) {
    alert("Congratulations! You have escaped the room!");
}   else if (userWithKeyDecision === 2) {
    alert("Uh-oh...you killed yourself")
}}
