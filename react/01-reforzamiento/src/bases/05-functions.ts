
function greet(name: string):string{
    return `Hola ${name}`;
}

const greet2 = (name: string):string => {
    return `Hola ${name}`;
}

const message = greet('Diego');
const message2 = greet2('Jose');

console.log(message, message2)

function getUser() {
    return {
        uid: 'ABC-123',
        username: 'El_Papi123'
    };
}

const getUser2 = () => {
    return {
        uid: 'DEF-456',
        username: 'El_Papi456'
    }
}

const user = getUser();
const user2 = getUser2();

console.log(user, user2);
