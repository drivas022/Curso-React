const characterNames = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = characterNames;
console.log({ p2 })

const returnArrayFn = () => {
    return[ 'ABC', 123 ] as const; // practicamente la volvemos readonly y siempre tendra primero un string y luego enteros
}

const [letters, numbers] = returnArrayFn();

console.log( letters, numbers)

