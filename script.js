document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('delivery-details').style.display = 'block';

  fetch('db.json')
    .then(response => response.json())
    .then(data => {
      const sizeSelect = document.getElementById('size');
      const typeSelect = document.getElementById('type');
      
       // Populate size options
       data.pizzas.sizes.forEach(size => {
        const option = document.createElement('option');
        option.value = size.price;
        option.textContent = `${size.name} [$${size.price}]`;
        sizeSelect.appendChild(option);
      });
