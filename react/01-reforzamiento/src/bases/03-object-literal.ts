const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        zipCode: 'ABC123',
        city: 'New York',
        country: 'USA'
    }
}

const spiderman = structuredClone(ironman); // toma todas las properties que estan en ironman y las asigna a spiderman, es decir, hace una copia de ironman

spiderman.firstName = 'Peter';
spiderman.lastName = 'Parker';
spiderman.age = 18;
spiderman.address.city = 'San Jose'; // copia


console.log(ironman, spiderman)
