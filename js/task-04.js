const incrementCount = document.querySelector('[data-action=increment]');
const decrementCount = document.querySelector('[data-action=decrement]');


const totalValue = document.getElementById('value');

let counterValue = 0;
totalValue.innerHTML = counterValue;

const handleIncrement = () => {
    counterValue += 1;
    totalValue.innerHTML = counterValue;
    
}
const handleDecrement = () => {
    counterValue -= 1;
    totalValue.innerHTML = counterValue;
}

incrementCount.addEventListener('click', handleIncrement);
decrementCount.addEventListener('click', handleDecrement);
