const cars = {
    Toyota: { name: 'Toyota', wheels: 4, doors: 4, isStarted: false, hp: 150 },
    Honda: { name: 'Honda', wheels: 4, doors: 4, isStarted: true, hp: 180 },
    BMW: { name: 'BMW', wheels: 4, doors: 2, isStarted: false, hp: 250 }
};

const getCar = (carName) => {
    if (cars[carName]) {
        return cars[carName];
    } else {
        return 'Car not found';
    }
};

const showCar = () => {
    const carName = document.getElementById('carNameInput').value;
    const car = getCar(carName);
    const resultDiv = document.getElementById('result');
    
    if (typeof car === 'string') {
        resultDiv.textContent = car;
    } else {
        resultDiv.innerHTML = `
            <ul>
                <li><strong>Name:</strong> ${car.name}</li>
                <li><strong>Wheels:</strong> ${car.wheels}</li>
                <li><strong>Doors:</strong> ${car.doors}</li>
                <li><strong>Is Started:</strong> ${car.isStarted}</li>
                <li><strong>HP:</strong> ${car.hp}</li>
            </ul>
        `;
    }
};
