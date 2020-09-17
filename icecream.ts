interface IceCream {
  flavor: 'Strawberry' | 'Chocolate' | 'Vanilla' | 'Coffee';
  ingredient?: string;
}

interface Crepe {
  topping?: 'Nut' | 'Chocochips' | 'Condensed Milk';
  fill: 'Banana' | 'Caramel' | 'Strawberry Jam';
}

type Dessert = IceCream | Crepe;

const dessertCollection = Array<Dessert>();

dessertCollection.push({
  flavor: 'Coffee',
});

dessertCollection.push({
  ingredient: 'Milk',
  flavor: 'Strawberry',
});

dessertCollection.push({
  flavor: 'Coffee'
});

dessertCollection.push({
  topping: 'Nut',
  fill: 'Strawberry Jam',
});

dessertCollection.forEach(e => console.log(e));

const firstIceCream = dessertCollection.shift() as IceCream;
const lastCrepe = dessertCollection.pop() as Crepe;


console.log('First Ice Cream');
console.log(firstIceCream)
console.log('Last Crepe');;
console.log(lastCrepe);

export {};
