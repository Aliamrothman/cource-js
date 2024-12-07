export default class Delivery {
    constructor(customerName, address, distance) {
        this.customerName = customerName;
        this.address = address;
        this.distance = distance;
    }

    createDeliveryCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = `Имя: ${this.customerName}`;
        
        const addressElement = document.createElement('p');
        addressElement.textContent = `Адрес: ${this.address}`;

        const distanceElement = document.createElement('p');
        distanceElement.textContent = `Расстояние: ${this.distance} км`;

        card.appendChild(nameElement);
        card.appendChild(addressElement);
        card.appendChild(distanceElement);

        return card;
    }

    getDistance() {
        return this.distance;
    }

    setDistance(distance) {
        this.distance = distance;
    }
}
