//Acceder a los elementos de una array

document.write ("<h3>ELEMENTOS DE UNA ARRAY</h3>")

const numbers = [1, 2, 3, 4, 5]
document.write ("El arreglo en su primera posicion es "+ numbers [0]+"<br>")
document.write ("El arreglo en la posicion es "+ numbers [2]+"<br>")


//Usar variables para acceder a los elementos de la array

let index = 4

document.write("la variable index corresponde a :"+ numbers[index]+"<br>")

//Modificar los elementos de una array

numbers[0]=10
numbers[2]=30

console.log (numbers)

document.write ("<h3>LA LONGITUD DE UNA ARRAY</h3>")

const frutas= ["Manzana", " Pera"," platano", " fresa"]
document.write("El array de frutas es: " +frutas+"<br>")
document.write("El array de frutas tiene una longitud de "+frutas.length+"<br>")