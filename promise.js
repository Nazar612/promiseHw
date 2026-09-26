// Завдання 1

// Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.

function delay(ms){
    const msPromise = new Promise((resolved, reject) => {
        setTimeout(()=> {
            if(true){
                resolved("Resolved after"+ ms + " ms")
            }else{
                reject("asd")
            }
        }, ms);
    });
    return msPromise
};
// const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then((value)=> {
    console.log(value);
})
delay(1000).then((value)=> {
    console.log(value);
})
delay(1500).then((value)=> {
    console.log(value);
})