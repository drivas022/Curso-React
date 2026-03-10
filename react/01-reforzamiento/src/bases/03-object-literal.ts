interface Person {
    firstName: string;
    lastName: string;
    age: number;

    // Con este signo de interrogacion, se hace que la propiedad sea opcional, es decir, no es necesario que el objeto tenga esa propiedad
    address: Address;
}
interface Address {
    zipCode: number;
    city: string;
}

const ironman: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipCode: 1321412,
        city: 'New York',
    }

}


console.log(ironman)

// const spiderman = structuredClone(ironman); // toma todas las properties que estan en ironman y las asigna a spiderman, es decir, hace una copia de ironman

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 18;
// spiderman.address.city = 'San Jose'; // copia


// console.log(ironman, spiderman)
