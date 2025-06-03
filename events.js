var opr = document.getElementById("operations-btn");
var value1 ;
var value2 ;
var output = document.getElementById("inputBox");
var newLine = true;
var currOpr;


function operatorBtn(opr){
    currOpr = opr ;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;
    /*document.getElementById("inputBox").value = currOpr;
     switch(currOpr){
        case addOpr:
            break;
        case subOpr:
            break;
        case mulOpr:
            break;
        case delOpr:
            break;}*/
}

/*show number pressed on screen */
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
    //remove all from screen and go back to default
    document.getElementById("inputBox").value = 0;
    newLine = true;
}

function equalBtn(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalT ;

    switch(currOpr){
        case "+":
            finalT = value1 + value2;
            break;
        case "-":
            finalT = value2 - value1;
            break;
        case "x":
            finalT = value1 * value2;
            break;
        case "/":
            if(value2 !== 0){
                finalT = value1 / value2;
            }else{
                finalT = undefined;
            }
            break;
    }
    document.getElementById("inputBox").value = finalT;
    value1 = 0;
    newLine = true;
}