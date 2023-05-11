var firstnum = document.getElementById("first_num")
var result = document.getElementById("result")

function sum(){
    result.innerHTML = getResult("+")}

    function difference(){
        result.innerHTML = getResult("-")}
        function product(){
            result.innerHTML = getResult("*")}
         function quotient(){
         result.innerHTML = getResult("/")}

         if (firstnum ===""){
function getResult(operator){

    if(operator === "+"){
        return parseFloat(firstnum.value) +=parseFloat (result.value)
 
    }else if(operator === "-"){
        return parseFloat(firstnum.value)- parseFloat (result.value)
 
    }
    else if(operator === "*"){
        return parseFloat(firstnum.value)* parseFloat (result.value)
 
    }
    else if(operator === "/"){
        return parseFloat(firstnum.value)/ parseFloat (result.value)
    }
    }
}

