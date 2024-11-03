document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    const calculateDeliveryCost = (weight, distance) => {
        return (weight * distance) / 10;
    };

    const validateForm = () => {
        let isValid = true;

        const name = form.productName.value.trim();
        const weight = parseFloat(form.productWeight.value);
        const distance = parseFloat(form.deliveryDistance.value);

        if (!name) {
            document.getElementById('nameError').textContent = 'Product name is required';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (isNaN(weight) || weight <= 0) {
            document.getElementById('weightError').textContent = 'Enter a valid weight';
            isValid = false;
        } else {
            document.getElementById('weightError').textContent = '';
        }

        if (isNaN(distance) || distance <= 0) {
            document.getElementById('distanceError').textContent = 'Enter a valid distance';
            isValid = false;
        } else {
            document.getElementById('distanceError').textContent = '';
        }

        return isValid;
    };

    const addProduct = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const name = form.productName.value.trim();
            const weight = parseFloat(form.productWeight.value);
            const distance = parseFloat(form.deliveryDistance.value);
            const cost = calculateDeliveryCost(weight, distance);

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${weight}</td>
                <td>${distance}</td>
                <td>${cost.toFixed(2)}</td>
            `;
            productList.appendChild(row);

            form.reset();
        }
    };

    form.addEventListener('submit', addProduct);
});
