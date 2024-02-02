let isfalse = false;
// show result on click button 
let btnClick = document.getElementById("buttonResult");
let result_show_container = document.querySelector(".result-show-container")
// input use for get users Value 
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let  operators = document.getElementById("operator");

// show the (hide/show) button on click  and remove and eventlistener base on condition input 

function isHide(e){

    if(result_show_container.clientHeight){
        result_show_container.style.height = "0px";
        
    }else{
        result_show_container.style.height = result_show_container.scrollHeight + "px";

    }
    e.preventDefault()
    isfalse = !isfalse;
    if(isfalse){
        num1.removeEventListener("input", resultShow);   
        num2.removeEventListener("input", resultShow);  
    }else{
        num1.addEventListener("input", resultShow);   
        num2.addEventListener("input", resultShow);  
    }
    

}

// add result function add input and button 
num1.addEventListener("input", resultShow)
num2.addEventListener("input", resultShow)
operators.addEventListener("input", resultShow)
btnClick.addEventListener("click" , resultShow)




// show result function 
function resultShow() {
    let user1 = Number(num1.value.trim());
    let user2 = Number(num2.value.trim());
    let operator = operators.value;
    calculator(operator, user1, user2);
}

// simple calculator function 
function calculator(operator = "+", a = 0, b = 0) {
    // select the result element 
    const result = document.getElementById("result");
    result.style.color = "";
    switch (operator) {
        case "+":
            result.innerHTML = (a + b);
            break;
        case "-":
            result.innerHTML = (a - b);
            break;
        case "*":
            result.innerHTML = (a * b);
            break;
        case "/":
            if (b == 0) {
                result.innerHTML = ("Error");
                result.style.color = "red";
            } else {
                result.innerHTML = (a / b).toFixed(4);
            }
            break;
        default:
            result.innerHTML = ("wrong operator");
    }
}

