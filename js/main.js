//En trigonometría los triángulos se pueden calificar en equiláteros (todos sus lados tienen la misma longitud), isósceles (dos lados tienen la misma longitud y el tercero, distinta) y escaleno (todos sus lados tienen diferente longitud)

//el confirm es un cuadro que devuelve true si aceptamos y false si cancelamos
let confirmacion = confirm('Querés saber qué tipo de triángulo tenemos según la longitud de sus lados?');

console.log(confirmacion);

//Si la damos aceptar al confirm entra en el bloque del if
if (confirmacion){
    //Ingresamos por prompt la longitud de cada lado de mi triángulo (todo lo que entra por prompt se guarda como tipo string) y lo parseamos con parseFloat para convertirlo a tipo number y que acepte decimales si los tuviese
    let lado1 = parseFloat(prompt('Ingrese la longitud del primer lado de su triángulo.'));
    console.log(lado1);
    console.log(typeof lado1);
    let lado2 = parseFloat(prompt('Ingrese la longitud del segundo lado de su triángulo.'));
    let lado3 = parseFloat(prompt('Ingrese la longitud del tercer lado de su triángulo.'));
    //Evaluamos si mis tres lados son iguales (tener en cuenta que dadas las 2 primeras comparaciones la tercera está de más ya que se da la igualación por defecto)
    if ((lado1 === lado2) && (lado1 === lado3) /*&& (lado2 === lado3)*/){
        alert('Mi triángulo es equilátero');
        //Evaluamos si sólo dos de mis lados son iguales
    } else if (((lado1 === lado2) && (lado1 !== lado3) && (lado2 !== lado3)) || ((lado1 === lado3) && (lado1 !== lado2) && (lado2 !== lado3)) || ((lado2 === lado3) && (lado1 !== lado3) && (lado1 !== lado2))){
        alert('Mi triángulo es isósceles');
        //Evaluamos si todos los lados son diferentes
    } else if ((lado1 !== lado2) && (lado1 !== lado3) && (lado2 !== lado3)){
        alert('Mi triángulo es escaleno.')
    }      
}