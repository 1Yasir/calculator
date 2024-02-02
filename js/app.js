function resultShow() {
    let user1 = Number(document.getElementById("num1").value.trim());
    let user2 = Number(document.getElementById("num2").value.trim());
    let operator = document.getElementById("option").value;
    calculator(operator, user1, user2);
}

function calculator(operator = "+", a = 0, b = 0) {
    const result = document.getElementById("result");
   

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
