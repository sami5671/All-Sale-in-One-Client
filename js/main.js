// Update calculations and add item to cart
function updateCalculationsAndAddItem(itemName, itemPriceId) {
  const totalElement = document.getElementById("total-price");
  const itemPriceElement = document.getElementById(itemPriceId);

  //   converting to number
  const totalTk = parseFloat(totalElement.innerText);
  const PriceItem = parseFloat(itemPriceElement.innerText);

  //   calculate total
  const total = totalTk + PriceItem;
  totalElement.innerText = total;

  // Add item to cart list
  const selectedItemsList = document.getElementById("selected-items");
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemsList.appendChild(li);

  // discount calculation
  document.getElementById("coupon-btn").addEventListener("click", function () {
    console.log("hello");
    const inputValue = document.getElementById("coupon");
    const inputValueString = inputValue.value;
    if (total >= 200) {
      if (inputValueString === "SELL200") {
        const cal = (20 * total) / 100;
      }
    }
    const discount = document.getElementById("discount").innerText;
    discount.innerText = cal;

    const grandTotal = document.getElementById("total").innerText;
    grandTotal.innerText = cal;
  });
}

// Add event listeners to "Add to cart" buttons
document.getElementById("btn-cart1").addEventListener("click", function () {
  const itemName = document.getElementById("name1");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk1");
});

document.getElementById("btn-cart2").addEventListener("click", function () {
  const itemName = document.getElementById("name2");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk2");
});

document.getElementById("btn-cart3").addEventListener("click", function () {
  const itemName = document.getElementById("name3");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk3");
});
document.getElementById("btn-cart4").addEventListener("click", function () {
  const itemName = document.getElementById("name4");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk4");
});
document.getElementById("btn-cart5").addEventListener("click", function () {
  const itemName = document.getElementById("name5");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk5");
});
document.getElementById("btn-cart6").addEventListener("click", function () {
  const itemName = document.getElementById("name6");
  const itemNameText = itemName.innerText;
  updateCalculationsAndAddItem(itemNameText, "tk6");
});

// You can add more event listeners for other "Add to cart" buttons if needed

// Similar event listeners for other "Add to cart" buttons
