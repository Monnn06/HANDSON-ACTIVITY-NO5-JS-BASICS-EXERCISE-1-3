function generateFullname() {
    let first=document.getElementById("fname").value;
    let middle=document.getElementById("mname").value;
    let last=document.getElementById("lname").value;

    let fullname = first + " " + middle + " " + last;

    document.getElementById("result").innerText = fullname;
}

function clearEntries() {
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("result").innerText = "";
}