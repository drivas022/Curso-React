const person = {
    name : 'Diego',
    age: 35,
    key: 'abc123',
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

// Desestructuración de objetos

const { name: ironmanName, age: ironmanAge, key } = person;

console.log({ ironmanName, ironmanAge, key })

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string | undefined;
}

const useContext = ({name, age, key, rank = 'sin rango'}: Hero) => {
    
    return{
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const {
    rank, 
    keyName, 
    user
    //user: {name}
} = useContext(person);

const { name } = user;

console.log({rank: rank, keyName: keyName, name});
