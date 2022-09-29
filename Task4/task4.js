function increment() {
    let counter = 0;
    return function() {
        counter ++;
        console.log('Counter value = ' + counter);
    };
}

let incrementCounter = increment();

incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();