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
    const input = document.getElementById('percent_input').value;
    const decimal = input / 100;
    const minDiff = 0.0001;
    let q = 1;
    while (true) {
        q += 1;
        let p = Math.round(q * decimal);
        if (Math.abs((p / q) - decimal) <= minDiff) {
            const output = document.getElementById('for_user');
            output.innerHTML = `${input}% = ${p}/${q}`;
            break;
        }
    }
    
}
