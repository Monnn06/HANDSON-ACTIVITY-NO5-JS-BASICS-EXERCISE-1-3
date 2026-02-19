let numbers = [];

function insertNumber() {
    let input=document.getElementById("num").value;

    if(input ==="") {
        alert ("Please enter a number");
        return;
    }

    let num= Number(input)
    numbers.push(num);

    display();
}

function deleteAll() {
    numbers= [];
    display();
}

function display(){
    document.getElementById("numbers").innerText = numbers.join("\n");

    if (numbers.length === 0) {
        document.getElementById("sum").innerText= "";
        document.getElementById("highest").innerText= "";
        document.getElementById("lowest").innerText= "";
        return;
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum +=numbers[i]
    }

    let highest= Math.max(...numbers);
    let lowest= Math.min(...numbers);

    document.getElementById("sum").innerText= sum;
    document.getElementById("highest").innerText= highest;
    document.getElementById("lowest").innerText= lowest;
}