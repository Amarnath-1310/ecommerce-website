const moneyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
const formatMoney = (n) => moneyFormatter.format(n);

const billItemsEl = document.getElementById('bill-items');
const billSubtotalEl = document.getElementById('bill-subtotal');
const billDiscountEl = document.getElementById('bill-discount');
const billTaxEl = document.getElementById('bill-tax');
const billTotalEl = document.getElementById('bill-total');
const placeOrderBtn = document.getElementById('place-order');

function getCheckoutData() {
  try {
    const raw = localStorage.getItem('checkoutData');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function computeTotals(items, coupon) {
  let subtotal = 0;
  items.forEach((it) => { subtotal += it.price * it.qty; });
  let discountRate = 0;
  if (coupon === 'SAVE10') discountRate = 0.1;
  if (coupon === 'FRESH20') discountRate = 0.2;
  const discount = subtotal * discountRate;
  const taxable = Math.max(0, subtotal - discount);
  const tax = taxable * 0.18; // 18% GST
  const total = taxable + tax;
  return { subtotal, discount, tax, total };
}

function renderBill() {
  const data = getCheckoutData();
  const items = data?.items || [];
  const coupon = data?.coupon || null;

  billItemsEl.innerHTML = '';
  const frag = document.createDocumentFragment();
  items.forEach((it) => {
    const li = document.createElement('li');
    li.className = 'bill-item';
    const fallback = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Grocery_basket.jpg';
    li.innerHTML = `
      <img class=\"bill-thumb\" src=\"${it.image}\" alt=\"${it.name}\" onerror=\"this.onerror=null;this.src='${fallback}';\" />
      <div class="bill-info">
        <p class="bill-name">${it.name}</p>
        <p class="bill-meta">${it.qty} × ${formatMoney(it.price)}</p>
      </div>
      <div class="bill-line-total">${formatMoney(it.qty * it.price)}</div>
    `;
    frag.appendChild(li);
  });
  billItemsEl.appendChild(frag);

  const { subtotal, discount, tax, total } = computeTotals(items, coupon);
  billSubtotalEl.textContent = formatMoney(subtotal);
  billDiscountEl.textContent = `-${formatMoney(discount)}`;
  billTaxEl.textContent = formatMoney(tax);
  billTotalEl.textContent = formatMoney(total);
}

renderBill();

placeOrderBtn?.addEventListener('click', () => {
  // In a real app, you'd process payment here
  alert('Order placed successfully!');
  localStorage.removeItem('checkoutData');
  window.location.href = 'index.html';
});


