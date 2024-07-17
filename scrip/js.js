document.querySelectorAll('.thumbnail-images img').forEach(img => {
    img.addEventListener('click', function() {
        document.querySelector('.main-image').src = this.src;
    });
});

