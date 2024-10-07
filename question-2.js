// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory[2] = { name: "Orange", price: 20, quantity: 300 };
const appleValue = inventory[0].price * inventory[0].quantity;
const bananaValue = inventory[1].price * inventory[1].quantity;
const orangeValue = inventory[2].price * inventory[2].quantity;
const totalValue = appleValue + bananaValue + orangeValue;

console.log(inventory);
console.log(totalValue);
