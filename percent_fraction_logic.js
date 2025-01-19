  
    
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
                    if (secondLastDigit !== 9) {
                        let roundOff = secondLastDigit + 1;
                        let finalString = reducedStr.slice(0, 3) + roundOff.toString();
                        let b = parseInt(finalString[0] + finalString.slice(2));
                        toFractionHund(b);
                    } else {
                        let thirdLastDigit = parseInt(reducedStr[reducedStr.length - 3])
                        if (thirdLastDigit !== 9) {
                            let roundOff = thirdLastDigit + 1;
                            let finalString = reducedStr.slice(0, 2) + roundOff.toString();
                            let b = parseInt(finalString[0] + finalString.slice(2));
                            toFractionTen(b);
                        } else {
                            let firstDigit = parseInt(reducedStr[0]);
                            let roundOff = firstDigit + 1;
                            let finalString = roundOff.toString();
                            const output = document.getElementById('for_user');
                            output.innerHTML = `${uiFloat}% = 1 / ${finalString}`;
                        }
                    }
                } else {
                    let finalString = reducedStr.slice(0, 4);
                    let b = parseInt(finalString[0] + finalString.slice(2));
                    toFractionHund(b);
                }
            } else if (reducedStr.length === 4) {
                if (lastDigit > 5) {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    if (secondLastDigit !== 9) {
                        let roundOff = secondLastDigit + 1;
                        let finalString = reducedStr.slice(0, 2) + roundOff.toString();
                        let b = parseInt(finalString[0] + finalString.slice(2));
                        toFractionTen(b);
                    }  else {
                        let firstDigit = parseInt(reducedStr[0]);
                        let roundOff = firstDigit + 1;
                        const output = document.getElementById('for_user');
                        output.innerHTML = `${uiFloat}% = 1 / ${roundOff}`;
                    }
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
                    if (secondLastDigit !== 9) {
                        let roundOff = secondLastDigit + 1;
                        let finalString = reducedStr.slice(0, 3) + roundOff.toString();
                        let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                        toFractionTen(b);
                    } else {
                        let firstDigit = parseInt(reducedStr.slice(0, 3));
                        let roundOff = firstDigit + 1;
                        const output = document.getElementById('for_user');
                        output.innerHTML = `${uiFloat}% = 1 / ${roundOff}`;
                    }
                } else {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    if (secondLastDigit !== 9) {
                        let finalString = reducedStr.slice(0, 4);
                        let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                        toFractionTen(b);
                    } else {
                        let firstDigit = parseInt(reducedStr.slice(0, 3));
                        let roundOff = firstDigit + 1;
                        const output = document.getElementById('for_user');
                        output.innerHTML = `${uiFloat}% = 1 / ${roundOff}`;
                    }
                }
            } else {
                if (!reducedStr.includes('.')) {
                    const output = document.getElementById('for_user');
                    output.innerHTML = `${uiFloat}% = 1 / ${reducedStr}`;
                } else {
                    let secondLastDigit = parseInt(reducedStr[reducedStr.length - 2]);
                    if (secondLastDigit !== 9) {
                        let finalString = reducedStr.slice(0, 4);
                        let b = parseInt(finalString.slice(0, 2) + finalString[3]);
                        toFractionTen(b);
                    } else {
                        let firstDigit = parseInt(reducedStr.slice(0, 3));
                        let roundOff = firstDigit + 1;
                        const output = document.getElementById('for_user');
                        output.innerHTML = `${uiFloat}% = 1 / ${roundOff}`;
                    }
                }
            }
        }
    } else {
        let hcf = calculateHCF(uiFloat, 100);
        const output = document.getElementById('for_user');
        output.innerHTML = `${uiFloat}% = ${Math.floor(uiFloat / hcf)} / ${Math.floor(100 / hcf)}`;
    }
