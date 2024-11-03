document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');
    const resultDiv = document.getElementById('result');
    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');

    ratingInput.addEventListener('input', () => {
        ratingValue.textContent = ratingInput.value;
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const gender = form.gender.value;
        const rating = form.rating.value;
        const interests = Array.from(form.interests)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        const comments = form.comments.value.trim();

        let isValid = true;

        if (!name) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        if (!email || !validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        if (isValid) {
            resultDiv.innerHTML = `
                <h2>User Data</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Service Rating:</strong> ${rating}</p>
                <p><strong>Interests:</strong> ${interests.join(', ')}</p>
                <p><strong>Comments:</strong> ${comments}</p>
            `;
        }
    });
});
