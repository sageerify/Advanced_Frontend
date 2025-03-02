function returnMap(){
    let items = ['item1', 'item2', 'item3', 'item4', 'item4', 'item5'];
    return function(){
        return items.filter(item => item === 'item4');
    }
}
let map = returnMap();
console.log(map());
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}
const counter = createCounter();
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
function updateDisplay() {
    counterDisplay.textContent = counter.getCount();
}
incrementButton.addEventListener('click', () => {
    counter.increment();
    updateDisplay();
});
decrementButton.addEventListener('click', () => {
    counter.decrement();
    updateDisplay();
});
resetButton.addEventListener('click', () => {
    counter.reset();
    updateDisplay();
});