// Function to add items to the cart
function addItem() {
  var itemInput = document.getElementById('itemInput');
  var itemPriceInput = document.getElementById('itemPrice');
  var itemName = itemInput.value.trim();
  var itemPrice = parseFloat(itemPriceInput.value);

  if (itemName === '' || isNaN(itemPrice) || itemPrice <= 0) {
      alert('Please enter a valid item name and price.');
      return;
  }

  // Sample data for item details
  var itemDetails = {
      name: itemName,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image:"https://via.placeholder.com/150",
      price: itemPrice.toFixed(2)
  };

  var cartItems = document.getElementById('cartItems');
  var li = document.createElement('li');
  li.innerHTML = `
      <div>
          <img src="data:image/jpeg;base64,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" alt="${itemDetails.name}" style="width: 50px; height: 50px;">
      </div>
      <div>
          <strong>${itemDetails.name}</strong>
          <p>${itemDetails.description}</p>
          <span>₹${itemDetails.price}</span>
      </div>
      <button class="edit-btn" onclick="editItem(this)">Edit</button>
      <button class="delete-btn" onclick="deleteItem(this)">Delete</button>
  `;
  cartItems.appendChild(li);

  // Update total price
  updateTotalPrice(itemPrice);

  // Clear input fields
  itemInput.value = '';
  itemPriceInput.value = '';
}

// Function to delete a single item
function deleteItem(button) {
  var item = button.parentElement;
  var itemPriceElement = item.querySelector('span');
  var itemPrice = parseFloat(itemPriceElement.textContent.replace('$', ''));
  item.remove();
  updateTotalPrice(-itemPrice); // Subtract item price from total
}

// Function to edit an item
function editItem(button) {
  var item = button.parentElement;
  var itemDetailsElement = item.querySelector('div:nth-child(2)');
  var itemNameElement = itemDetailsElement.querySelector('strong');
  var itemPriceElement = itemDetailsElement.querySelector('span');

  // Retrieve current item details
  var itemName = itemNameElement.textContent;
  var itemPrice = parseFloat(itemPriceElement.textContent.replace('$', ''));

  // Prompt user to edit item details
  var newItemName = prompt('Enter new item name:', itemName);
  var newItemPrice = prompt('Enter new item price:', itemPrice);

  // Validate inputs
  newItemPrice = parseFloat(newItemPrice);
  if (newItemName === '' || isNaN(newItemPrice) || newItemPrice <= 0) {
      alert('Please enter a valid item name and price.');
      return;
  }

  // Update item details
  itemNameElement.textContent = newItemName;
  itemPriceElement.textContent = `RS${newItemPrice.toFixed(2)}`;

  // Update total price (subtract old price, add new price)
  var newTotalPrice = newItemPrice - itemPrice;
  updateTotalPrice(newTotalPrice);
}

// Function to clear the entire cart
function clearCart() {
  var cartItems = document.getElementById('cartItems');
  while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
  }
  document.getElementById('totalPrice').textContent = '0.00';
}

// Function to update total price
function updateTotalPrice(amount) {
  var totalPriceElement = document.getElementById('totalPrice');
  var currentTotal = parseFloat(totalPriceElement.textContent);
  var newTotal = currentTotal + amount;
  totalPriceElement.textContent = newTotal.toFixed(2);
}

// Function to open checkout modal
function openCheckout() {
  var modal = document.getElementById('checkoutModal');
  modal.style.display = 'block';
}

// Function to close checkout modal
function closeCheckout() {
  var modal = document.getElementById('checkoutModal');
  modal.style.display = 'none';
}

// Function to process checkout
function processCheckout(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var totalPrice = document.getElementById('totalPrice').textContent;

  // Display order summary in modal
  var orderSummaryElement = document.getElementById('orderSummary');
  orderSummaryElement.innerHTML = ''; // Clear previous order summary

  var cartItems = document.getElementById('cartItems').getElementsByTagName('li');
  for (var i = 0; i < cartItems.length; i++) {
      var itemDetailsElement = cartItems[i].getElementsByTagName('div')[1];
      var itemName = itemDetailsElement.getElementsByTagName('strong')[0].textContent;
      var itemPrice = itemDetailsElement.getElementsByTagName('span')[0].textContent;

      var li = document.createElement('li');
      li.textContent = `${itemName}: ${itemPrice}`;
      orderSummaryElement.appendChild(li);
  }

  // Update total price in checkout modal
  var checkoutTotalPriceElement = document.getElementById('checkoutTotalPrice');
  checkoutTotalPriceElement.textContent = totalPrice;

  // Simulate successful order submission (you can add your actual code here)
  alert(`Thank you, ${name}! Your order has been successfully placed.`);

  // Close checkout modal
  closeCheckout();

  // Clear cart
  clearCart();
}

// Save cart items to local storage
localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));

// Retrieve cart items from local storage
var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
