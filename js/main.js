// global declaration
let total;

// disable and enable section for coupon button
const couponButton = document.getElementById("coupon-btn");
couponButton.disabled = true;

function CouponButton() {
  if (total >= 200) {
    couponButton.disabled = false;
  } else {
    couponButton.disabled = true;
  }
}

//  calculations and add item to cart

function calculationsAndAddItem(itemName, itemPriceId) {
  const totalElement = document.getElementById("total-price");
  const itemPriceElement = document.getElementById(itemPriceId);

  //   converting to number
  const totalTk = parseFloat(totalElement.innerText);
  const PriceItem = parseFloat(itemPriceElement.innerText);

  //   calculate total
  total = totalTk + PriceItem;
  totalElement.innerText = total;

  // Add item to cart list
  const selectedItemsList = document.getElementById("selected-items");
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemsList.appendChild(li);

  CouponButton();
}

// Add event listeners to "Add to cart" buttons
document.getElementById("btn-cart1").addEventListener("click", function () {
  const itemName = document.getElementById("name1");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk1");
});

document.getElementById("btn-cart2").addEventListener("click", function () {
  const itemName = document.getElementById("name2");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk2");
});

document.getElementById("btn-cart3").addEventListener("click", function () {
  const itemName = document.getElementById("name3");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk3");
});
document.getElementById("btn-cart4").addEventListener("click", function () {
  const itemName = document.getElementById("name4");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk4");
});
document.getElementById("btn-cart5").addEventListener("click", function () {
  const itemName = document.getElementById("name5");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk5");
});
document.getElementById("btn-cart6").addEventListener("click", function () {
  const itemName = document.getElementById("name6");
  const itemNameText = itemName.innerText;
  calculationsAndAddItem(itemNameText, "tk6");
});

// discount calculation
document.getElementById("coupon-btn").addEventListener("click", function () {
  console.log(total);
  const inputValue = document.getElementById("coupon");

  const inputValueString = inputValue.value;

  if (total >= 200 && inputValueString === "SELL200") {
    let cal = (20 * total) / 100;

    let discount = document.getElementById("discount");
    discount.innerText = cal;

    let grandTotal = document.getElementById("total");
    grandTotal.innerText = total - cal;
  } else {
    alert("Invalid Coupon code!!!!");
  }
});
// MAKE PURCHASE BUTTON
function makePurchase() {
  window.location.href = "index.html";
}
