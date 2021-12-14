// un condicional es la respuesta de nuestro programa a determinada situacion o condicion la cual si se cumple nos va a responder de n forma y sino nos va a dar otra respuesta

/*
    Si tengo 18 años o mas:
        Soy mayor de edad
    Sino:
        No soy mayor de edad
*/

// Vamos a pasar este condicional a codigo
const edad = prompt("¿Que edad tenes?");

if(edad>= 18) {
    alert("Sos mayor de edad");
}
else {
    alert("No sos mayor de edad");
}

/* 
= Compara de forma NO ESTRICTA y evalua si sobre-escribir el valor de una condicion, este operador jamas se utiliza en un condicional

== Compara de forma NO ESTRICTA, el valor de nuestra variable con la condicion a cumplir

=== Compara de forma ESTRICTA, nuestra variable o dato con el valor de la condicion a cumplir

<> El simbolo menor y mayor, lo que hacen es delimitar un vector numerico en el cual nuestra condicion se cumple o no

&& Representa el valor AND o Y en español, y su funcion es la de concadenar condiciones que deben cumplirse para ejecutar las instrucciones que se encuentran dentro de IF

*/