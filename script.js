const rowAns = ["bust", "tiran", "ukart", "cela", "or"];
const colAns = ["biker", "ural", "sara", "tnt", "tuco"];

row1 = "";
row2 = "";
row3 = "";
row4 = "";
row5 = "";

for (i = 0; i < 5; i++){
    row1 += document.getElementById("0" + String(i));
    row1 += document.getElementById("1" + String(i));
    row1 += document.getElementById("2" + String(i));
    row1 += document.getElementById("3" + String(i));
    row1 += document.getElementById("4" + String(i));
}


console.log(row1);
console.log(row2);
console.log(row3);
console.log(row4);
console.log(row5);