function primecheck() {
    const user_input = document.getElementById('my_input');
    const x = user_input.value;
    let is_prime = true;
    for(let i = 2; i <= parseInt(Math.sqrt(x)); i++) {
        if(x % i === 0) {
            is_prime = false;
            break;
        }
    }
    const result = document.getElementById('for_user')
    if (is_prime && x > 1) {
        result.innerHTML = "This is a prime number!"
    } 
    else {
        result.innerHTML = "This is not a prime number!"
    }
}