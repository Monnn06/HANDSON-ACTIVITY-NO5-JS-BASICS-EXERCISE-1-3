function calculate() {
    var n1 = parseFloat(document.getElementById("num1").value)
    var n2 = parseFloat(document.getElementById("num2").value)

    var sum=n1 + n2;
    var diff=n1 - n2;
    var prod=n1 * n2;
    var quot=n1 / n2;

    document.getElementById("sum").innerHTML = sum;
    document.getElementById("diff").innerHTML = diff;
    document.getElementById("prod").innerHTML = prod;
    document.getElementById("quot").innerHTML = quot;
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("sum").innerHTML = "";
    document.getElementById("diff").innerHTML = "";
    document.getElementById("prod").innerHTML = "";
    document.getElementById("quot").innerHTML = "";
}