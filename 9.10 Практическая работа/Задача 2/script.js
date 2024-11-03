const cars = {
    Toyota: { name: 'Toyota', wheels: 4, doors: 4, isStarted: false, hp: 150 },
    Honda: { name: 'Honda', wheels: 4, doors: 4, isStarted: true, hp: 180 },
    BMW: { name: 'BMW', wheels: 4, doors: 2, isStarted: false, hp: 250 }
};

const listCarNames = () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = ''; 
    for (const car in cars) {
        if (cars.hasOwnProperty(car)) {
            console.log(car);
            resultDiv.textContent += `${car}\n`;
        }
    }
};
