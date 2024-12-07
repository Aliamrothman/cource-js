import EditDelivery from './EditDelivery.js';

const deliveryArr = [
    new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8, "delivery"),
    new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
    new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
];

const deliveryList = document.getElementById('delivery-list');

function renderDeliveries() {
    deliveryList.innerHTML = ''; // مسح المحتوى السابق
    deliveryArr.forEach(delivery => {
        const card = delivery.createDeliveryCard(); // إنشاء بطاقة التوصيل
        deliveryList.appendChild(card); // إضافتها إلى DOM
    });
}

// حدث عند الضغط على زر حساب المسافة
document.getElementById('calculate-distance').addEventListener('click', () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArr); // حساب المسافة الإجمالية
    document.getElementById('total-distance').textContent = `Общее расстояние: ${totalDistance} км`; // عرض النتيجة
});

// تم عرض عمليات التسليم عند تحميل الصفحة
renderDeliveries(); // مسح وإعادة عرض جميع عمليات التوصيل عند تحميل الصفحة
