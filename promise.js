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
});



// Завдання 2

// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
    const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
    const usersPromise = new Promise((resolved, rejected) => {
        resolved(updatedUsers)
    });

    return usersPromise
};





/*
 * Повинно працювати так
 */
toggleUserState(users, 'Mango').then((value)=> {
    console.table(value)
});
toggleUserState(users, 'Lux').then((value)=> {
    console.table(value)
});;