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

// const hamburger = {
//   name: "Cheese Burger",
//   weight: 250,
//   maker: {
//     name: "Anonymous Chef",
//     restaurant: {
//       name: "Hyur's Burgers",
//       address: "Main Street, 123",
//       isOpen: true,
//     },
//     age: 29,
//   },
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// saranno creati nove oggetti: il primo burger,
// nel quale sono annidati il maker e il restaurant,
// e poi due copie profonde di burger, che contengono
// la stessa struttura del primo

// const chef = {
//   name: "Chef Hyur",
//   age: 29,
//   makeBurger: (num = 1) => {
//     console.log(`Ecco ${num} hamburger per te!`);
//   },
// };

// const restaurant = {
//   name: "Hyur's Burgers",
//   address: {
//     street: "Main Street",
//     number: 123,
//   },
//   openingDate: new Date(2025, 3, 11),
//   isOpen: false,
// };

// Il metodo migliore per clonare l'oggetto chef è lo spread
// perchè mi permette di creare una shallow copy con tutte le
// proprietà, includendo il riferimento alla funzione in
// makeBurger

// Nel caso di restaurant sarebbe più indicato un metodo
// structuredClone(), in quanto mi permetterebbe di clonare
// oggetti complessi annidati come Date.
// Se optassimo per JSON.parse(JSON.stringify()) avremmo
// la possibilità di fare una deep copy, ma l'oggetto Date
// sarebbe convertito in stringa, dato che sarebbe serializzato
// e deserializzato

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

const newRestaurant = { ...hamburger.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = { ...hamburger };
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name);
("Chef Hyur");
console.log(secondBurger.maker.name);
("Chef Hyur");
console.log(hamburger.maker.restaurant.name);
("Hyur's II");
console.log(secondBurger.maker.restaurant.name);
("Hyur's II");

// Saranno creati in memoria 5 oggetti:
// burger, maker, restaurant, newRestaurant, secondBurger
// SecondBurger sarà solo una shallow copy di berger,
// quindi gli oggetti annidati sono passati per reference

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

// il metodo migliore per copiare l'oggetto chef è lo spread op
// in quanto potremo copiare anche la funzione welcomeClient.
// il resto degli oggetti e delle funzioni annidate saranno passate
// saranno passate per riferimento, quindi dovremo stare attenti ad
// eventuali modifiche

function deepCopyOf(object) {
  if (typeof object !== "object") {
    return object;
  }

  const copy = {};

  for (const key in object) {
    const value = object[key];
    if (typeof value !== "object") {
      copy[key] = value;
    } else {
      copy[key] = deepCopyOf(value);
    }
  }
}

deepCopyOf();
