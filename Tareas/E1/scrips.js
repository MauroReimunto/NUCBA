const ingredientes = ["Harina", "Sal", "Agua", "Oregano", "Muzzarella", "Jamon", "Tomate", "Morron", "Longaniza", "levadura"]

var ingredientesPares = [];
var ingredientesImpares = [];

const diferenciarIngredientes = ingredientes => {

        for (let i = 0; i < ingredientes.length; i++) {
            if (ingredientes[i].leght % 2 == 0) {
                ingredientesPares.push(ingredientes[i]);
            } 
            else {
                ingredientesImpares.push(ingredientes[i]);
            }

        }
    }

console.log("Los ing pares son", ingredientesPares, "Los ingredientes impares son", ingredientesImpares)