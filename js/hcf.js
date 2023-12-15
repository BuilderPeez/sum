function HCF() {
    const num1 = (document.getElementById('num1').value);
    const num2 = (document.getElementById('num2').value);

    if (num1 <= 1 || num2 <= 1) {
        alert('Please enter a number greater than 1')
        document.getElementById('result').innerText = 'Please enter a number greater than 1.';
    } else {
        const hcf = calculateHCF(num1, num2);
        document.getElementById('result').innerText = 'The HCF of ' + num1 + ' and ' + num2 + ' is ' + hcf;
    }
}

function calculateHCF(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}