// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function findLowQuant(arr) {
  let lowestName;
  let lowestQuantity = arr[0].quantity;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].quantity < lowestQuantity) {
      lowestQuantity = arr[i].quantity;
      lowestName = arr[i].name;
    }
  }
  return `${lowestName} has the lowest quantity at ${lowestQuantity}`;
}

console.log(findLowQuant(inventory));
