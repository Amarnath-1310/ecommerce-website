// Product data (sample)
const products = [
  { id: 'apples', name: 'Apples (1kg)', price: 2.99, image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg' },
  { id: 'bananas', name: 'Bananas (1kg)', price: 1.49, image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Bananas.jpg' },
  { id: 'bread', name: 'Whole Wheat Bread', price: 2.2, image: 'https://sallysbakingaddiction.com/wp-content/uploads/2024/01/whole-wheat-bread-3.jpg' },
  { id: 'milk', name: 'Organic Milk (1L)', price: 1.99, image: 'https://th.bing.com/th/id/OIP.BTGBEHZDhjq701ou61v9-AHaGO?w=210&h=180&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: 'eggs', name: 'Free-range Eggs (12)', price: 3.49, image: 'https://th.bing.com/th/id/OIP.yYkHFdeMI2_AmK-eI0e9NQHaE7?w=276&h=183&c=7&r=0&o=7&pid=1.7&rm=3' },
  { id: 'tomatoes', name: 'Tomatoes (1kg)', price: 2.39, image: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg' },
  { id: 'cheese', name: 'Cheddar Cheese (200g)', price: 4.29, image: 'data:image/webp;base64,UklGRlwFAABXRUJQVlA4IFAFAABwIwCdASqJALQAPp1InEmlpKMiKvbqeLATiUAZ8xrJ0ziB/4T8FfcG+Yvzj/OX343eoTtNjJzwWQQCsA1x0BBhFMCamuJd4UzS/JgAFxDxiwK8QKijYh4XmzHmUIDD2BKiTo3GkHynw5nmhijDeLfatKCpEFi28H4YcS0WqnTsKS4u16GUqJDF5Z7ighfBag7OCvpSftZ0tUwNwBtvKUy6N40P1hW+Y/indbDlj8vl4XXiw2AgHkPhfLKf9V/mIxWuOiHVrawu3dPfjQ2Z6yAKAgk8rEwtSnJklZTBpcE0HM/xcuT/+yJllLqzTtG6X1hUEDTdbKv/5Cqxho99DLKKvOodyxMx/mG0DF3rgZAO+4/+yi2n+9xTEH5YbXsZ+7dI8iOAAP77IYMCGos6rxikPi5sH11u1SUQlXy6ZeVIDQuz7jiSFEyr7JdgDiEb9miekBuNEB5p8WNOafQTklJvEjR+raPARJcFH92rghMSVvnz+tGlT7pw0ouDTz+quTaWZURtCGWFUNd7aaaUdmoK1mXuOLNZjAcZdPUKOMD0pHE4k9aNfQwWYLJ+kFEyChwTD+IPoS6S3keHJWLKTHQJ2LVCueZVy58BktIfw+jqKCJfrpLJzewYLHoMzcwiDQ5kUB/rMejUUcMhHLhL808HEHB1KiY23J4uDUIoGkzif2oSkCrUNuUrHpTkfCBeWRK7zf7/KXSN0VzhgzMukSZ52ElSHgGaiGUxhzIkrLFHXwGbIEEo7k5DfmvO//rI7ELmyMH1zbHMETuIgXLYosiSxk9xHahysN4WWBtgLxKFnKFIzBWH1BJhpTjX0OrDBPPRvgQlVCqarEQuuqyaFO/kntI3ZakWtY2usFzCfpIwz8rypjtaSUM42IRllNLHEWZtzPIIh2bWEi9JMcutuYwK7mPlJnoG/6aiMDwBT971KV0JEOw8ga5GM9zLy+c5boA+74lDQlqzGZQRrqmZwahjsmuraFgS9BA16qWwRB/3m+FmnJUDFmq8JtkHJycth4DInTHH0tTOYuqPZzGluBCL0lmm3bbjsnbV2jWHSFHQaT2tFuAGU3Gu+/CdjP9zNwZMCES5t4/e7fqGaLWXw6WGp3Ax4WVN4ANKw/D8/nkH0/pFuN19DGIKvHs/0C6kdeAJdfOVIYvuer2i8pIe0rvhqitsZqcei0RU/u0Z/oOh9JhWLiUIz3Dm+Pr7Dfk7JOWVwVvG/QVKoJm3zW2q0o140jPGVjOVcTCtUaHEZmE9RMC4wUtlqVByRru3rOHacZ5mO9oXPVeGUSLAOiULGlB2F/R7RcQo88WB3qB+MvzjwbLsZNODSVStNSkXoT8lpvygEnVoFMDSjKjt6VZwlLvdGzjttlwVNYMl4NWOJN7Ki9qET5oWE6kDdMGza//VNEHVgmYRAmbgurZZH5LwJikfIS6JeUxspy9ikWidGdBckaNXEs45V+4NGNRx9J5h5orkptpmMuqDuj0/GIGvSMkB8BB2mYnHAhLc8h5z7xZABshcn3rVGry4MtzQ4W9Iw/7JU3fz/xepnc7EfnUZAVxxgNGjdw9Sf8xUC6ovo6Fo+644064NXumxiEAG0wpKPZ8iu6XXFwK04Fh8ZJA8gCS9mwNSjtGHU2vtQxypxpNvnFrDTjo73xkHQQLxukLEAIhp9WZOgQ2J0kphNJpgpG53nIQSdMdMN1pYhsym0W4K3xFdJ1IYAs1bHRJ6hvj64+zy1cdEJ5CIJc0DM7FHI17rTM7iL5SN9yxpP0z+l4tOCcfbezR4oZP7m3rMbtRv4YWZJ39aiG83wm7nAAAAAAAA' },
  { id: 'coffee', name: 'Ground Coffee (250g)', price: 5.49, image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG' }
];

// State
const cart = new Map(); // id -> {product, qty}
let appliedCoupon = null; // 'SAVE10' | 'FRESH20' | null

// Utils
const moneyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
const formatMoney = (n) => moneyFormatter.format(n);

// Elements
const gridEl = document.getElementById('product-grid');
const cartListEl = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const discountEl = document.getElementById('discount');
const totalEl = document.getElementById('total');
const cartCountEl = document.getElementById('cart-count');
const floatingCartBtn = document.getElementById('floating-cart');
const cartPanel = document.getElementById('cart-panel');
const closeCartBtn = document.getElementById('close-cart');
const couponInput = document.getElementById('coupon-input');
const applyCouponBtn = document.getElementById('apply-coupon');
const goCheckoutBtn = document.getElementById('go-checkout');

// Render Products
function renderProducts() {
  const frag = document.createDocumentFragment();
  products.forEach((p) => {
    const card = document.createElement('div');
    card.className = 'product-card glass';
    const fallback = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Grocery_basket.jpg';
    card.innerHTML = `
      <img class=\"product-image\" src=\"${p.image}\" alt=\"${p.name}\" loading=\"lazy\" onerror=\"this.onerror=null;this.src='${fallback}';\" />
      <div class="product-info">
        <div>
          <p class="product-name">${p.name}</p>
          <p class="product-price">${formatMoney(p.price)}</p>
        </div>
        <button class="btn btn-add" data-id="${p.id}">Add</button>
      </div>
    `;
    frag.appendChild(card);
  });
  gridEl.appendChild(frag);

  gridEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-add');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const product = products.find((x) => x.id === id);
    addToCart(product);
  });
}

// Cart Logic
function addToCart(product) {
  const existing = cart.get(product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.set(product.id, { product, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(productId) {
  const entry = cart.get(productId);
  if (!entry) return;
  if (entry.qty > 1) {
    entry.qty -= 1;
  } else {
    cart.delete(productId);
  }
  updateCartUI();
}

function calculateTotals() {
  let subtotal = 0;
  for (const { product, qty } of cart.values()) {
    subtotal += product.price * qty;
  }
  let discountRate = 0;
  if (appliedCoupon === 'SAVE10') discountRate = 0.1;
  if (appliedCoupon === 'FRESH20') discountRate = 0.2;
  const discount = subtotal * discountRate;
  const total = Math.max(0, subtotal - discount);
  return { subtotal, discount, total };
}

function updateCartUI() {
  // Count
  let count = 0;
  cartListEl.innerHTML = '';
  const frag = document.createDocumentFragment();
  for (const { product, qty } of cart.values()) {
    count += qty;
    const li = document.createElement('li');
    li.className = 'cart-item';
    const fallback = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Grocery_basket.jpg';
    li.innerHTML = `
      <img class=\"cart-thumb\" src=\"${product.image}\" alt=\"${product.name}\" onerror=\"this.onerror=null;this.src='${fallback}';\" />
      <div>
        <p class="cart-name">${product.name}</p>
        <p class="cart-meta">${qty} × ${formatMoney(product.price)}</p>
      </div>
      <button class="cart-remove" data-id="${product.id}">Remove</button>
    `;
    frag.appendChild(li);
  }
  cartListEl.appendChild(frag);
  cartCountEl.textContent = count.toString();

  // Bind remove buttons
  cartListEl.querySelectorAll('.cart-remove').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      removeFromCart(id);
    });
  });

  // Totals
  const { subtotal, discount, total } = calculateTotals();
  subtotalEl.textContent = formatMoney(subtotal);
  discountEl.textContent = `-${formatMoney(discount)}`;
  totalEl.textContent = formatMoney(total);
}

// Coupon
function applyCoupon() {
  const code = couponInput.value.trim().toUpperCase();
  if (code === 'SAVE10' || code === 'FRESH20') {
    appliedCoupon = code;
    couponInput.value = code;
    couponInput.style.borderColor = '#34d399';
  } else {
    appliedCoupon = null;
    couponInput.style.borderColor = '#ff6b6b';
  }
  updateCartUI();
}

// Cart Panel interactions (mobile)
floatingCartBtn.addEventListener('click', () => {
  cartPanel.classList.toggle('open');
});
closeCartBtn.addEventListener('click', () => cartPanel.classList.remove('open'));
applyCouponBtn.addEventListener('click', applyCoupon);
couponInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyCoupon(); });

// Checkout navigation: persist cart and coupon to localStorage
if (goCheckoutBtn) {
  goCheckoutBtn.addEventListener('click', () => {
    const payload = {
      items: Array.from(cart.values()).map(({ product, qty }) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        qty,
      })),
      coupon: appliedCoupon,
      currency: 'INR',
    };
    localStorage.setItem('checkoutData', JSON.stringify(payload));
    window.location.href = 'checkout.html';
  });
}

// Init
renderProducts();
updateCartUI();


