// Function to add items to the cart
function addItem() {
  var itemInput = document.getElementById('itemInput');
  var itemValue = itemInput.value.trim();

  if (itemValue === '') {
      alert('Please enter an item');
  } else {
      var cartItems = document.getElementById('cartItems');
      var li = document.createElement('li');
      li.textContent = itemValue;

      // Create a delete button
      var deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '<i class="fa-solid fa-times"></i>';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function() {
          cartItems.removeChild(li);
      };

      li.appendChild(deleteBtn);
      cartItems.appendChild(li);
      itemInput.value = '';
  }
}

// Function to clear all items from the cart
function clearCart() {
  var cartItems = document.getElementById('cartItems');
  while (cartItems.firstChild) {
      cartItems.removeChild(cartItems.firstChild);
  }
}
