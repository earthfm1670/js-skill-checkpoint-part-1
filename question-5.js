// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(product, discount) {
  let totalPrice = 0;
  let totalDiscount = 0;
  for (let item of product) {
    totalPrice += item.price * item.quantity;
  }
  switch (discount) {
    case "SALE20":
      totalDiscount = 0.8;
      break;

    case "SALE50":
      totalDiscount = 0.5;
      break;

    default:
      totalDiscount = 1;
      break;
  }

  return totalPrice * totalDiscount;
}

console.log(calculateTotalPrice(products, promotionCode));
