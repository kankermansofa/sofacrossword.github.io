const rowAns = ["bust", "tiran", "ukart", "cela", "or"];
const colAns = ["biker", "ural", "sara", "tnt", "tuco"];

let row1 = "";
let row2 = "";
let row3 = "";
let row4 = "";
let row5 = "";
let col1 = "";
let col2 = "";
let col3 = "";
let col4 = "";
let col5 = "";

function rows() {
    row1 = "";
    row2 = "";
    row3 = "";
    row4 = "";
    row5 = "";

    for (let i = 0; i < rowAns.length(); i++) {
        row1 += document.getElementById("0" + String(i)).value.toLowerCase();
    }
    for (let i = 0; i < rowAns.length(); i++) {
        row2 += document.getElementById("1" + String(i)).value.toLowerCase();
    }
    for (let i = 0; i < rowAns.length(); i++) {
        row3 += document.getElementById("2" + String(i)).value.toLowerCase();
    }
    for (let i = 0; i < rowAns.length(); i++) {
        row4 += document.getElementById("3" + String(i)).value.toLowerCase();
    }
    for (let i = 0; i < rowAns.length(); i++) {
        row5 += document.getElementById("4" + String(i)).value.toLowerCase();
    }
}

function cols() {
    col1 = "";
    col2 = "";
    col3 = "";
    col4 = "";
    col5 = "";

    for (let i = 0; i < colAns.length(); i++) {
        col1 += document.getElementById(String(i) + "0").value.toLowerCase();
    }
    for (let i = 0; i < colAns.length(); i++) {
        col2 += document.getElementById(String(i) + "1").value.toLowerCase();
    }
    for (let i = 0; i < colAns.length(); i++) {
        col3 += document.getElementById(String(i) + "2").value.toLowerCase();
    }
    for (let i = 0; i < colAns.length(); i++) {
        col4 += document.getElementById(String(i) + "3").value.toLowerCase();
    }
    for (let i = 0; i < colAns.length(); i++) {
        col5 += document.getElementById(String(i) + "4").value.toLowerCase();
    }
}

check = document.getElementById("check");
submit = document.getElementById("submit");
reset = document.getElementById("reset");

check.onclick = function () {
    let result = "";
    rows();
    cols();

    if (col1 == colAns[4]) {
        result += colAns[4].toUpperCase() + " is correct!\n";
    }
    if (col2 == colAns[0]) {
        result += colAns[0].toUpperCase() + " is correct!\n";
    }
    if (col3 == colAns[1]) {
        result += colAns[1].toUpperCase() + " is correct!\n";
    }
    if (col4 == colAns[2]) {
        result += colAns[2].toUpperCase() + " is correct!\n";
    }
    if (col5 == colAns[3]) {
        result += colAns[3].toUpperCase() + " is correct!\n";
    }

    if (row1 == rowAns[0]) {
        result += rowAns[0].toUpperCase() + " is correct!\n";
    }
    if (row2 == rowAns[1]) {
        result += rowAns[1].toUpperCase() + " is correct!\n";
    }
    if (row3 == rowAns[2]) {
        result += rowAns[2].toUpperCase() + " is correct!\n";
    }
    if (row4 == rowAns[3]) {
        result += rowAns[3].toUpperCase() + " is correct!\n";
    }
    if (row5 == rowAns[4]) {
        result += rowAns[4].toUpperCase() + " is correct!\n";
    }

    if (result === "") {
        result = "No correct rows or columns!";
    }

    alert(result);
}

submit.onclick = function(){

    rows();
    
    if (row1 == "" || row2 == "" || row3 == "" || row4 == "" || row5 == "" ){
        alert("Please fill in every square!");
    }
    else if (row1 == rowAns[0] && row2 == rowAns[1] && row3 == rowAns[2] && row4 == rowAns[3] && row5 == rowAns[4]){
        alert("Congrats! You got all the answers correct!");
    }
    else{
        alert("Not quite! Try again!")
    }
};

reset.onclick = function(){
    for (i = 0; i < 5; i++){
        document.getElementById("0" + String(i)).value = null;
    }   
    for (i = 0; i < 5; i++){
        document.getElementById("1" + String(i)).value = null;
    }
    for (i = 0; i < 5; i++){
        document.getElementById("2" + String(i)).value = null;
    }
    for (i = 0; i < 5; i++){
        document.getElementById("3" + String(i)).value = null;
    }
    for (i = 0; i < 5; i++){
        document.getElementById("4" + String(i)).value = null;
    }
}