function fetchCatImages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                'Practice Images/cat1.jpg', 
                'Practice Images/cat2.jpg',
                'Practice Images/cat3.jpg'
            ]);
        }, 2000);
    });
}

function fetchDogImages() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                'Practice Images/dog1.jpg', 
                'Practice Images/dog2.jpg',
                'Practice Images/dog3.jpg'
            ]);
        }, 2000);
    });
}

function displayImages(imageArray, containerId) {
    const container = document.getElementById(containerId);
    imageArray.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Image';
        container.appendChild(img);
    });
}

function progress(time, barId, timerId) {
    const progressBar = document.getElementById(barId);
    const timerDisplay = document.getElementById(timerId);
    let width = 0;

    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            return;
        }
        width += (100 / time);
        progressBar.style.width = width + '%';
        timerDisplay.innerText = Math.floor(width / (100 / time)) + ' sec';
    }, 1000);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(interval);
            timerDisplay.innerText = time + ' sec';
            resolve();
        }, time * 1000);
    });
}

async function loadImages() {
    await progress(3, 'progress-bar', 'timer');
    const cats = await fetchCatImages();
    displayImages(cats, 'cat-images');

    await progress(3, 'dog-progress-bar', 'dog-timer');
    const dogs = await fetchDogImages();
    displayImages(dogs, 'dog-images');
}

window.onload = loadImages;
