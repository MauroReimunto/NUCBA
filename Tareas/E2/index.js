const Pizzas = [
  {id: 0, nombre: "Muzzarella", ingredientes: ["Muzzarella", "Salsa de tomate"], precio: 600},

  {id: 1, nombre: "Especial", ingredientes: ["Muzzarella","Salsa de tomate","Jamón Cocido"], precio: 750},

  {id: 2, nombre: "Cuatro Quesos", ingredientes: ["Muzzarella", "Gruyere", "Roquefort", "Parmesano", "Salsa de tomate"], precio: 800},

  {id: 3, nombre: "Calabresa", ingredientes: ["Muzzarella", "Salsa de tomate", "Salame"], precio: 580},

  {id: 4, nombre: "Cebolla", ingredientes:["Muzzarella", "Salsa de tomate", "Cebolla"], precio: 700},

  {id: 5, nombre: "Lechuga", ingredientes: ["Muzzarella", "Salsa de tomate", "Lechuga", "Mayonesa"], precio: 430}
];

console.log("Pizzas con id impar: ");

for(let i=0; i<Pizzas.length; i++){
  if( Pizzas[i].id%2){
    console.log(`${Pizzas[i].nombre}`);
  }
}

for(let i=0; i<Pizzas.length; i++){
  if( Pizzas[i].precio < 600 ){
      console.log(`La Pizza ${Pizzas[i].nombre} tiene un valor de valor ${Pizzas[i].precio}`);
      break;
  }
}

console.log("Nuestros sabores son: ");
for (let i=0; i< Pizzas.length; i++){
  console.log(`${Pizzas[i].nombre}`);
}

console.log("Los precios son: ");
for (let i=0; i< Pizzas.length; i++){
  console.log(`$${Pizzas[i].precio}`);
}

for (let i=0; i< Pizzas.length; i++){
  console.log(`La Pizza ${Pizzas[i].nombre} vale $${Pizzas[i].precio}`);
}