// var dias = [
//     "lunes",
//     "martes",
//     "miercoles",
//     "jueves",
//     "viernes",
//     "sabado",
//     "domingo",
// ];

// var ac = 0;

// for (let i = 0; i < 7; i++) {
//     if (dias[i]) {
//         ac++;
//     }
// }

// function sumar() {
//     var n1 =25;
//     var n2 = 50;
//     var resultado = 0;
//     resultado = n1 + n2;
//     console.log("Resultado: ", resultado)
// }

// sumar()

// function sumar (){
//     var n1 = 5;
//     var n2 = 5;
//     var resultado = n1+n2;
//     return resultado;
// }

// var resultado_Funcion = sumar()


// function multiplicar(n1, n2) {
//     var resultado = n1 * n2;
//     return resultado;
// }

// var resultado_Funcion = multiplicar(2, 10)

// var sumar =(n1,n2)=> {
//     var resultado = n1+ n2;
//     return resultado;
// };

// var resultado_Sumar = sumar()

// class Robot {
//     constructor(color, posicionX, posicionY) {
//         this.color = color;
//             this.posicionX = posicionX;
//             this.posicionY = posicionY;
//     }
//     desplazar = function (X, Y) {
//         this.posicionX = X;
//         this.posicionY = Y;
//     }
//     posicion = function () {
//         console.log(
//             "robot " +
//             this.color +
//             "en X: " +
//             this.posicionX +
//             "en Y:" +
//             this.posicionY
//         )
//     }
// }

// var robot1 = new Robot("verde", 10, 10);
// var robot1 = new Robot("naranja", 5, 5);
// var robot1 = new Robot("celeste", 0, 0);

// robot1.posicion();

// const capitalizeName = (names) => {
//     const splitNames = names.split(' ');

//     let fullName = "";

//     for (let index = 0; index < splitNames.length; index++) {
//         const capitalizeFirstLetter = splitNames[index] .split("")[0].toUpperCase();

//         const nameSplit = splitNames[index].split("");

//         namesSplit[0] = capitalizeFirstLetter;

//         fullname = `${fullName} ${nameSplit.join("")}`;
//     }

//     return fullName.trim()
// }

// const personas = [
//     {id:0, name:"Ariel", lasName:"Perez"}, 
//     {id:1, name:"Nico", lastName:"Perez"}, 
//     {id:2, name:"vale", lastName:"Perez"}, 
// ];

// for(let i =0; i<personas.length; i++){
//     console.log(personas[i])
// }

const personas = [
  {id:0, name:"Ariel", lasName:"Perez"}, 
  {id:1, name:"Nico", lastName:"Perez"}, 
  {id:2, name:"vale", lastName:"Perez"}, 
];

// for(let i =0; i<personas.length; i++){
//   console.log("el id es:",personas[i].id)
// }

// var number = [2, 8, 7, 9];
// var doubles = number.map((x) => {
//   return x * 2;
// })
// console.log(doubles)

// let newDoubles = [];
// for (let i = 0; i < number.length; i++) {
//   var doubles = number[i] * 2;
//   newDoubles.push(doubles);
// }
// console.log(newDoubles);

console.log (
    personas.map((p) => {
        return `id: ${p.id} nombre: ${p.lastName}, apellido: ${p.name}`
    })
)

