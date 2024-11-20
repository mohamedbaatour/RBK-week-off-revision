$(".logo").click(function () {
  window.location.href = "home.html";
});

var stringedCart = window.localStorage.getItem("cart") || "[]";
var parsedCart = window.JSON.parse(stringedCart);

for (i = 0; i < parsedCart.length; i++) {
  $(".cards").append(`<div class="card" style="animation-delay: ${i * 200}ms">
        
    <div class="card-content">
        <img class="carImg" src="${parsedCart[i].image}">
        <div class="card-title">
        <h4 class="car-name">${parsedCart[i].name}</h4>
            <p class="car-price">$${parsedCart[i].price}</p>
        </div>  
        
        <p class="car-disc">${parsedCart[i].description}</p>
    </div>
    </div>`);
}

var options = function () {
  var ac = carTotal();
  ac = ac / 40;
  return ac;
};

var carTotal = function () {
  acc = 0;
  for (l = 0; l < parsedCart.length; l++) {
    acc = acc + parsedCart[l].price;
  }
  return acc;
};

var total = function () {
  acc = 0;
  acc = carTotal() + options() + shipping();
  return acc;
};

var shipping = function () {
  if (parsedCart.length === 0) {
    return 0;
  } else {
    return 2000 * parsedCart.length;
  }
};

var clearCart = function () {
  window.localStorage.removeItem("cart");
  window.location.reload();
};

$(".totalPrice").append(`
    <div class="total">
     <h2 class="carTotal">Total Price: $${total()}</h2>
        <p class="pTotal" id="carTotal">Car(s) Price: $${carTotal()}</p>
        <p class="pTotal" id="vatTotal">Custom Options: $${options()} </p>
        <p class="pTotal" id="shippingTotal" >Shipping: $${shipping()}</p>
        <button class="Clear" onclick="clearCart()">Clear Cart</button>
        </div>
    `);
