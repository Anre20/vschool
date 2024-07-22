document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-btn");
    const totalElement = document.getElementById("total");

    calculateButton.addEventListener("click", calculateTotal);

    function calculateTotal() {
        const goombaQuantity = parseInt(document.querySelector("#baddies tr:nth-child(1) input").value) || 0;
        const bobombQuantity = parseInt(document.querySelector("#baddies tr:nth-child(2) input").value) || 0;
        const cheepcheepQuantity = parseInt(document.querySelector("#baddies tr:nth-child(3) input").value) || 0;

        const goombaPrice = 20;
        const bobombPrice = 200;
        const cheepcheepPrice = 500;

        const total = (goombaQuantity * goombaPrice) + (bobombQuantity * bobombPrice) + (cheepcheepQuantity * cheepcheepPrice);

        totalElement.textContent = `Total: ${total}`;
    }
});
