function checkNumber() {
    let num = document.getElementById("number").value;

    if (num === "") {
        document.getElementById("result").innerText = "Please enter a number.";
    } else if (num % 2 === 0) {
        document.getElementById("result").innerText = num + " is an Even Number.";
    } else {
        document.getElementById("result").innerText = num + " is an Odd Number.";
    }
}