var add = document.getElementById("addition");
add.addEventListener("click", () => {
      
});
var value ;
var opr ;

function operatorBtn(opr){
    currOpr = opr;
    value = parseInt(document.getElementById("inputBox").value);
    newLine = true;
     /*switch(opr){
        case "+":
     }*/
}
var newLine = true;

var buttonValue = document.getElementsByClassName("number-buttons");
function showOnScreen(buttonValue){
    if(newLine){
        document.getElementById("inputBox").value = buttonValue;
        newLine = false;
    }else{
    //user input  shown on the screen(input)
        var curr = document.getElementById("inputBox").value ;
        document.getElementById("inputBox").value = curr + buttonValue;
    }
}

function clearBox(){
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

function equalBtn(){

    var total;

}