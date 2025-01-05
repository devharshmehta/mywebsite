function inputvalidation() {
    const input_taken = document.getElementById('user_input');
    let replaced_input = input_taken.value;
    replaced_input = replaced_input.replace(/[^0-9+-/*().Math.sqrt]/g, '');
    input_taken.value = replaced_input;
}
function calculate() {
    const input = document.getElementById('user_input');
    const string = input.value;
    const result = eval(string);
    const output = document.getElementById('for_user');
    output.innerHTML = `${result}`
    
}
