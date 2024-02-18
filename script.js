const rowAns = ["bust", "tiran", "ukart", "cela", "or"];

submit = document.getElementById("submit");
reset = document.getElementById("reset");

submit.onclick = function(){
    let row1 = "";
    let row2 = "";
    let row3 = "";
    let row4 = "";
    let row5 = "";

    for (i = 0; i < 5; i++){
        row1 += document.getElementById("0" + String(i)).value.toLowerCase();
    }   
    for (i = 0; i < 5; i++){
        row2 += document.getElementById("1" + String(i)).value.toLowerCase();
    }
    for (i = 0; i < 5; i++){
        row3 += document.getElementById("2" + String(i)).value.toLowerCase();
    }
    for (i = 0; i < 5; i++){
        row4 += document.getElementById("3" + String(i)).value.toLowerCase();
    }
    for (i = 0; i < 5; i++){
        row5 += document.getElementById("4" + String(i)).value.toLowerCase();
    }

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


