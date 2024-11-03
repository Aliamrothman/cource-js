const showFullSizeImage = (event) => {
    const thumbnail = event.target;
    const fullSizeImage = document.getElementById('fullsizeImage');
    fullSizeImage.src = thumbnail.src;
    fullSizeImage.alt = thumbnail.alt;
};

document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', showFullSizeImage);
});
