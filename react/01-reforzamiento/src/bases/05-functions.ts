
function greet(name: string):string{
    return `Hola ${name}`;
}

const greet2 = (name: string)=> `Hola ${name}`; // Abreviado


const message = greet('Diego');
const message2 = greet2('Jose');

console.log(message, message2)

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi123'
    };
}

const getUser2 = () => ({
    uid: 'DEF-456',
    username: 'El_Papi456'
})
    

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//     console.log({value})
// });

// // función callback
// myNumbers.forEach( (value) => {
//     console.log({value})
// });

myNumbers.forEach(console.log)