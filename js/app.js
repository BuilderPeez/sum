function calculateSum() {
    const inputNumber = document.getElementById("inputNumber").value;
    const n = (inputNumber);

    if (n <= 0) {
        document.getElementById("result").textContent = "Please enter a positive value.";
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        document.getElementById("result").textContent = "Result: " + sum;
    }
}