let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    saveCart();
    displayCart();
}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}


function displayCart() {

    let cartDiv = document.getElementById("cartItems");

    cartDiv.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total = total + item.price;

        cartDiv.innerHTML += `
            <div class="cartRow">

                <span>${item.name}</span>

                <span>₹${item.price}</span>

                <button onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

    });


    document.getElementById("total").innerHTML =
        "Total : ₹" + total;


    document.getElementById("totalCount").innerHTML =
        " ( " + cart.length + " ) ";
}


function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

}


function clearCart() {

    cart = [];

    saveCart();

    displayCart();

}