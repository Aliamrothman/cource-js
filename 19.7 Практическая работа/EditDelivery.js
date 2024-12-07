class EditDelivery {
    constructor(name, address, distance, status) {
        this.name = name;
        this.address = address;
        this.distance = distance;
        this.status = status;
    }

    createDeliveryCard() {
        const card = document.createElement('div');
        card.classList.add('delivery-card');

        const nameElement = document.createElement('h2');
        nameElement.textContent = `Имя: ${this.name}`;
        card.appendChild(nameElement);

        const addressElement = document.createElement('p');
        addressElement.textContent = `Адрес: ${this.address}`;
        card.appendChild(addressElement);

        const distanceElement = document.createElement('p');
        distanceElement.textContent = `Расстояние: ${this.distance} км`;
        card.appendChild(distanceElement);

        return card;
    }

    static getTotalDistance(deliveries) {
        return deliveries.reduce((total, delivery) => total + delivery.distance, 0);
    }
}

export default EditDelivery;
