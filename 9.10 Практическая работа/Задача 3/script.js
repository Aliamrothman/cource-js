const createCar = (additionalProperties) => {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    };

    return { ...baseCar, ...additionalProperties };
};

const showCreatedCar = () => {
    const newCar = createCar({ name: 'Haval', hp: 198 });
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <ul>
            <li><strong>Name:</strong> ${newCar.name}</li>
            <li><strong>Wheels:</strong> ${newCar.wheels}</li>
            <li><strong>Doors:</strong> ${newCar.doors}</li>
            <li><strong>Is Started:</strong> ${newCar.isStarted}</li>
            <li><strong>HP:</strong> ${newCar.hp}</li>
        </ul>
    `;
};
