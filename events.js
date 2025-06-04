
let value1 ;
let value2 ;
let newLine = true;
let currOpr;


function operatorBtn(opr){
    currOpr = opr ;
    value1 = parseFloat(document.getElementById("inputBox").value);
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
function numValue(buttonValue){
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
    document.getElementById("inputBox").value = "0";
    newLine = true;
    value1 = null;
    currOpr = null;
}

function equalBtn(){
    value2 = parseFloat(document.getElementById("inputBox").value);
    let finalT ;

    switch(currOpr){
        case "+":
            finalT = value1 + value2;
            break;
        case "-":
            finalT = value1 - value2;
            break;
        case "x":
            finalT = value1 * value2;
            break;
        case "/":
            if(value2 !== 0){
                finalT = value1 / value2;
            }else{
                finalT = "Error";
            }
            break;
        default:
            finalT = "Invalid";
    }
    document.getElementById("inputBox").value = finalT;
    newLine = true;
}