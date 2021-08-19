const phoneIncrement = document.getElementById("phone-increment")
const phoneDecrement = document.getElementById("phone-decrement")

const caseIncrement = document.getElementById("case-increment")
const caseDecrement = document.getElementById("case-decrement")




function totalCalculate(userInp, checker) {
    const userInpTake = document.getElementById(userInp + "-input").value;
    let userInpValue = parseInt(userInpTake);

    if (checker == true) {
        userInpValue = userInpValue + 1;
        console.log(userInpValue);
    } else {
        if (userInpValue > 0) {
            userInpValue = userInpValue - 1;
        }
    }
    document.getElementById(userInp + "-input").value = userInpValue;
    setValue();
}

function setValue() {
    const phoneInput = document.getElementById("phone-input").value;
    let phoneTotalCost = parseInt(phoneInput * 1219);
    const caseInput = document.getElementById("case-input").value;
    let caseTotalCost = parseInt(caseInput * 59);

    document.getElementById("phone-cost").innerText = phoneTotalCost;
    document.getElementById("case-cost").innerText = caseTotalCost;

    let totalPhoneCaseCost = phoneTotalCost + caseTotalCost;
    let taxCost = totalPhoneCaseCost / 10;
    let inTotal = totalPhoneCaseCost + taxCost;


    const subTotal = document.getElementById("subtotal").innerText = totalPhoneCaseCost
    const tax = document.getElementById("tax").innerText = taxCost;
    const total = document.getElementById("total").innerText = inTotal;


}




phoneIncrement.addEventListener("click", (e) => {
    totalCalculate('phone', true)
});


phoneDecrement.addEventListener("click", (e) => {
    totalCalculate('phone', false)
});

// casing-number-handaling

caseIncrement.addEventListener("click", (e) => {
    totalCalculate('case', true)
});


caseDecrement.addEventListener("click", (e) => {
    totalCalculate('case', false)
});