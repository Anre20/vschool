class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "Small";
        this.hasStar = false;
    }


    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                break;
        }
    }

    gotPowerup() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";
                break;
            case "Powered Up":
                this.hasStar = true;
                break;
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Total Coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`);
        console.log(`Has Star: ${this.hasStar}`);
    }
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const player = new Player("Mario");

const interval = setInterval(() => {
    const random = getRandomInRange(0, 2);
    switch (random) {
        case 0:
            player.gotHit();
            break;
        case 1:
            player.gotPowerup();
            break;
        case 2:
            player.addCoin();
            break;
    }
    player.print();
    if (player.status === "Dead") {
        clearInterval(interval);
        console.log("Game Over!");
    }
}, 1000);
