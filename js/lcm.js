function LCM() {
    var num1 = (document.getElementById("num1").value);
    var num2 = (document.getElementById("num2").value);

    if (num1 <= 1 || num2 <= 1) {
        document.getElementById("result").innerHTML = "Please, enter a number greater than 1.";
        return;
    }

    var lcm = (num1 * num2) / GCD(num1, num2);

    document.getElementById("result").innerHTML = "LCM of " + num1 + " and " + num2 + " is " + lcm;
}

function GCD(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
