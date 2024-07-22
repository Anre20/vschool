function add() {
    let num1 = parseFloat(document.getElementById("addNum1").value);
    let num2 = parseFloat(document.getElementById("addNum2").value);
    let result = num1 + num2;
    document.getElementById("addResult").innerText = "Result: " + result;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("subNum1").value);
    let num2 = parseFloat(document.getElementById("subNum2").value);
    let result = num1 - num2;
    document.getElementById("subResult").innerText = "Result: " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("mulNum1").value);
    let num2 = parseFloat(document.getElementById("mulNum2").value);
    let result = num1 * num2;
    document.getElementById("mulResult").innerText = "Result: " + result;
}
