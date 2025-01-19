function input_validation() {
    const input = document.getElementById('percent_input');
    input.addEventListener('input', () => {
        if (parseFloat(input.value) > 100) {
            input.value = 100;
        }
        if (parseFloat(input.value) < 1) {
            input.value = 1;
        }
    })
}
function percent_to_frac() {
    function calculateHCF(firstNumber, secondNumber) {
        while (firstNumber && secondNumber > 0) {
            let temp = firstNumber;
            firstNumber = secondNumber;
            secondNumber = temp % secondNumber;
        }
        if (firstNumber === 0) {
            return secondNumber;
        } else {
            return firstNumber;
        }
    }

    function toFractionHund(b) {
        let c = calculateHCF(100, b);
        const output = document.getElementById('for_user');
        output.innerHTML = `${uiFloat}% = ${Math.floor(100 / c)} / ${Math.floor(b / c)} approximate.`
    }

    function toFractionTen(b) {
        let c = calculateHCF(10, b);
        const output = document.getElementById('for_user');
        output.innerHTML = `${uiFloat}% = ${Math.floor(10 / c)} / ${Math.floor(b / c)} approximate.`
    }

    function toFractionThsnd(b) {
        let c = calculateHCF(1000, b);
        const output = document.getElementById('for_user');
        output.innerHTML = `${uiFloat}% = ${Math.floor(1000 / c)} / ${Math.floor(b / c)} approximate.`
    }

    const userInput = document.getElementById('percent_input').value;
    const uiFloat = parseFloat(userInput);

    if (userInput.includes(".")) {
        let decimal = 100 / uiFloat;
        let decimalToString = decimal.toString();
        let reducedStr = decimalToString.slice(0, 5);

        if (reducedStr[1] === ".") {
            let lastDigit = parseInt(reducedStr[reducedStr.length - 1]);

            if (reducedStr.length === 5) {
                if (lastDigit > 5) {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    let roundOff = secondLastDigit + 1;
                    let finalString = reducedStr.slice(0, 3) + roundOff.toString();
                    let b = parseInt(finalString[0] + finalString.slice(2));
                    if (b.toString().length === 4) {
                        toFractionThsnd(b);
                    } else {
                        toFractionHund(b);
                    }
                } else {
                    let finalString = reducedStr.slice(0, 4);
                    let b = parseInt(finalString[0] + finalString.slice(2));
                    toFractionHund(b);
                }
            } else if (reducedStr.length === 4) {
                if (lastDigit > 5) {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    let roundOff = secondLastDigit + 1;
                    let finalString = reducedStr.slice(0, 2) + roundOff.toString();
                    let b = parseInt(finalString[0] + finalString.slice(2));
                    toFractionTen(b);
                } else {
                    let finalString = reducedStr;
                    let b = parseInt(finalString[0] + finalString.slice(2));
                    toFractionHund(b);
                }
            } else {
                let finalString = reducedStr;
                let b = parseInt(finalString[0] + finalString.slice(2));
                toFractionTen(b);
            }
        } else {
            let lastDigit = parseInt(reducedStr[reducedStr.length - 1]);

            if (reducedStr.length === 5) {
                if (lastDigit > 5) {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    let roundOff = secondLastDigit + 1;
                    let finalString = reducedStr.slice(0, 3) + roundOff.toString();
                    let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                    toFractionTen(b);
                } else {
                    let finalString = reducedStr.slice(0, 4);
                    let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                    toFractionTen(b);
                }
            } else {
                if (!reducedStr.includes('.')) {
                    const output = document.getElementById('for_user');
                    output.innerHTML = `${uiFloat}% = 1 / ${reducedStr}`
                } else {
                    let finalString = reducedStr.slice(0, 4);
                    let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                    toFractionTen(b);
                }
            }
        }
    } else {
        let hcf = calculateHCF(uiFloat, 100);
        const output = document.getElementById('for_user');
        output.innerHTML = `${uiFloat}% = ${Math.floor(uiFloat / hcf)} / ${Math.floor(100 / hcf)}`
    }
}
