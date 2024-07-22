const readline = require("readline-sync");

const genin = [
    {
        name: "Gaara",
        attackPower: 350,
        HP: 2500,
        specialMove: "Sand Coffin",
        speed: 4
    },
    {
        name: "Sasuke",
        attackPower: 250,
        HP: 1100,
        specialMove: "Fire Style: Fireball Jutsu",
        speed: 8
    },
    {
        name: "Oboro",
        attackPower: 70,
        HP: 500,
        specialMove: "Sly Mind Affect Technique",
        speed: 5
    },
    {
        name: "Sakura",
        attackPower: 100,
        HP: 700,
        specialMove: "Cherry Blossom Bomb",
        speed: 7
    },
    {
        name: "Doju",
        attackPower: 130,
        HP: 500,
        specialMove: "Earth Style: Mud Wall",
        speed: 3
    },
    {
        name: "Ino",
        attackPower: 110,
        HP: 600,
        specialMove: "Mind Transfer Jutsu",
        speed: 7
    },
    {
        name: "Hinata",
        attackPower: 200,
        HP: 900,
        specialMove: "Gentle Fist Technique",
        speed: 8
    },
    {
        name: "Kiba",
        attackPower: 175,
        HP: 1100,
        specialMove: "Fang over Fang",
        speed: 8
    },
    {
        name: "Tenten",
        attackPower: 145,
        HP: 1050,
        specialMove: "Summoning Technique: Twin Rising Dragons",
        speed: 6
    },
    {
        name: "Choji",
        attackPower: 190,
        HP: 1150,
        specialMove: "Partial Expansion Jutsu",
        speed: 4
    }
];

const playerName = readline.question("What is your name? ");
console.log(playerName);

const greeting = `Hello ${playerName}, welcome to The Forest of Death.`;
console.log(greeting);
const player = [
    {
        name: playerName,
        attackPower: 160,
        HP: 1300,
        specialMove: "Lightning Style: Sword Transformation Jutsu",
        speed: 8.5
    }
];

// Start the player with a random scroll
let startingScroll = Math.random() < 0.5 ? "Heaven Scroll" : "Earth Scroll";
let keyItems = [startingScroll];
// console.log(`You have several kunai, a sword, food pellets, and ${startingScroll}`);

const explanation = "The only way to escape The Forest of Death is to acquire both the 'Heaven' and 'Earth' scrolls.  You have been given a scroll.  When you defeat enemies they drop a scroll.";
console.log(explanation);

let heavenScroll = startingScroll === "Heaven Scroll";
let earthScroll = startingScroll === "Earth Scroll";

while (!heavenScroll || !earthScroll) {
    const userStart = readline.question("What would you like to do? [w] Walk. [i] Check your inventory. [q] Quit. ");

    if (userStart.toLowerCase() !== 'w' && userStart.toLowerCase() !== 'i' && userStart.toLowerCase() !== 'q') {
        console.log("Please input either [w], [i], or [q]");
    } else if (userStart.toLowerCase() === 'i') {
        console.log(`You have several kunai, a sword, food pellets, ${heavenScroll ? 'a' : 'no'} Heaven Scroll and ${earthScroll ? 'an' : 'no'} Earth Scroll.`);
    } else if (userStart.toLowerCase() === 'q') {
        console.log("You have decided to give up.  You were escorted safely out of The Forest of Death in shame.");
        break;
    } else if (userStart.toLowerCase() === 'w') {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            let randomIndex = Math.floor(randomNumber * genin.length);
            let randomOpponent = genin[randomIndex];

            let userFlee;
            do {
                console.log("You encountered:", randomOpponent.name);
                userFlee = readline.question("Attempt to flee? [y] Yes. [n] No.");
                if (userFlee.toLowerCase() !== 'y' && userFlee.toLowerCase() !== 'n') {
                    console.log("Please input either [y] or [n]");
                }
            } while (userFlee.toLowerCase() !== 'y' && userFlee.toLowerCase() !== 'n');

            if (userFlee.toLowerCase() === 'y') {
                let fleeAttempt = Math.random() < 0.3 ? "success" : "failure";
                if (fleeAttempt === "success") {
                    console.log("You successfully fled from the battle!");
                    continue;
                } else {
                    console.log("Your attempt to flee failed!");
                }
            }

            // Determine who attacks first based on speed
            let firstAttacker, secondAttacker;
            if (player[0].speed >= randomOpponent.speed) {
                firstAttacker = player[0];
                secondAttacker = randomOpponent;
            } else {
                firstAttacker = randomOpponent;
                secondAttacker = player[0];
            }

            // Attack sequence
            while (player[0].HP > 0 && randomOpponent.HP > 0) {
                console.log(`${firstAttacker.name} attacks ${secondAttacker.name} with ${firstAttacker.specialMove} for ${firstAttacker.attackPower} attack power!`);
                secondAttacker.HP -= firstAttacker.attackPower;
                console.log(`${secondAttacker.name} HP: ${secondAttacker.HP}`);
                if (secondAttacker.HP <= 0) {
                    console.log(`${secondAttacker.name} was defeated!`);
                    break;
                }
                console.log(`${secondAttacker.name} attacks ${firstAttacker.name} with ${secondAttacker.specialMove} for ${secondAttacker.attackPower} attack power!`);
                firstAttacker.HP -= secondAttacker.attackPower;
                console.log(`${firstAttacker.name} HP: ${firstAttacker.HP}`);
                if (firstAttacker.HP <= 0) {
                    console.log(`${firstAttacker.name} was defeated!`);
                    break;
                }
            }

            // If player wins, add a scroll to inventory
            if (player[0].HP > 0) {
                let scroll = Math.random() < 0.5 ? "Heaven Scroll" : "Earth Scroll";
                console.log(`Congratulations! You defeated ${randomOpponent.name} and obtained a(n) ${scroll}!`);
                if (scroll === "Heaven Scroll") {
                    heavenScroll = true;
                } else {
                    earthScroll = true;
                }
            } else {
                console.log("Game over! You were defeated...");
                break;
            }
        } else if (randomNumber < 0.85) {
            player[0].HP += 50;
            console.log("You were able to perform a short rest. You have gained 50 HP!");
            console.log("You now have " + player[0].HP + " HP");
        } else {
            player[0].HP += 100;
            console.log("You were able to perform a long rest. You have gained 100 HP!");
            console.log("You now have " + player[0].HP + " HP");
        }
    }
}

// Check if the player has both scrolls
if (heavenScroll && earthScroll) {
    console.log("Congratulations! You have acquired both the Heaven and Earth scrolls. You are now able to escape The Forest of Death!");
} else {
    console.log("You didn't manage to acquire both scrolls. Game over!");
}
