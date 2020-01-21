let counterIncrementer = (function() {
    let counter = 0;

    return function() {
        return ++counter;
    };
})(); // use Immediately Invoked Function Expression to create a private variable, counter

console.log(counterIncrementer());
console.log(counterIncrementer());
console.log(counterIncrementer());