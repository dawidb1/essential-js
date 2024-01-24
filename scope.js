function globalLogger() {
    console.log('I am global function')
}

function parent() {
    
    // this is lexical environment/scope for inner
    let acc = 0

    return function inner() {
        acc = acc+1

        // also lexical environment
        globalLogger()
        console.log('acc: ', acc);
        return acc;
    }
}

console.log('start')


// execution context 1
const parent1 = parent()
// execution context 2
parent1()
// execution context 3
parent1()


console.log('end')