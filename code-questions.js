// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = "Double Cheese Burger";
// secondBurger.weight = 500;

// console.log(hamburger.name);
// ("Double Cheese Burger");
// console.log(secondBurger.name);
// ("Double Cheese Burger");

// è stato creato un unico oggetto in memoria, al quale
// puntano due riferimenti, hamburger e secondBurger

//

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   ingredients: ["Cheese", "Meat", "Bread", "Tomato"],
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]);
// ("Salad");
// console.log(secondBurger.ingredients[0]);
// ("Salad");

// sono stati creati due oggetti in memoria, il primo è burger
// mentre il secondo è secondBurger, che è una shallow copy
// del primo: ha copiato tutte le sue proprietà superficiali,
// ma gli oggetti annidati sono passati per riferimento

//

const hamburger = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29,
  },
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// saranno creati nove oggetti: il primo burger,
// nel quale sono annidati il maker e il restaurant,
// e poi due copie profonde di burger, che contengono
// la stessa struttura del primo
