const myArray:number[] = [1, 2, 3, 4, 5, 6]

const myArray2 = structuredClone(myArray)

myArray2.push(7)

console.log({myArray, myArray2})

// Siempre tratemos de definir que tipo de datos va a tener el array, 
// para evitar errores en el futuro, ya que si no definimos el tipo de datos, 
// el array puede contener cualquier tipo de dato, lo cual puede generar errores 
// en el futuro cuando intentemos acceder a los elementos del array y no sepamos 
// que tipo de dato es cada elemento.