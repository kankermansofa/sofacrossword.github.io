const rowAns = ["bust", "tiran", "ukart", "cela", "or"];
const colAns = ["biker", "ural", "sara", "tnt", "tuco"];

row1 = "";
row2 = "";
row3 = "";
row4 = "";
row5 = "";

submit = document.getElementById("submit");
reset = document.getElementById("reset");

submit.onclick = function(){
    for (i = 0; i < 5; i++){
        row1 += document.getElementById("0" + String(i)).value;
    }   
    for (i = 0; i < 5; i++){
        row2 += document.getElementById("1" + String(i)).value;
    }
    for (i = 0; i < 5; i++){
        row3 += document.getElementById("2" + String(i)).value;
    }
    for (i = 0; i < 5; i++){
        row4 += document.getElementById("3" + String(i)).value;
    }
    for (i = 0; i < 5; i++){
        row5 += document.getElementById("4" + String(i)).value;
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


