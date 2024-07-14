
    // script.js
    document.addEventListener('DOMContentLoaded', () => {
      const cartItems = [];

      document.querySelectorAll('.product-item button').forEach(button => {
        button.addEventListener('click', event => {
          const productItem = event.target.closest('.product-item');
          const productName = productItem.querySelector('h3').innerText;
          const productPrice = productItem.querySelector('p').innerText;

          addToCart(productName, productPrice);
        });
      });

      function addToCart(name, price) {
        const cartItem = { name, price };
        cartItems.push(cartItem);
        updateCart();
      }

      function removeFromCart(name) {
        const itemIndex = cartItems.findIndex(item => item.name === name);
        if (itemIndex !== -1) {
          cartItems.splice(itemIndex, 1);
        }
        updateCart();
      }

      function updateCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        cartItemsContainer.innerHTML = '';

        cartItems.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item';
          itemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>${item.price}</p>
            <button class="remove-btn">Remove</button>
          `;
          itemDiv.querySelector('.remove-btn').addEventListener('click', () => {
            removeFromCart(item.name);
          });
          cartItemsContainer.appendChild(itemDiv);
        });
      }

      document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Proceeding to checkout');
      });
    });
  