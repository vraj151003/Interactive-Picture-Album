document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');
    const loadMoreButton = document.getElementById('load-more');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    let itemsLoaded = 0;
    const itemsPerLoad = 7;


    const images = [
        { src: 'Assets/nature1.jpg', category: 'nature' },
        { src: 'Assets/nature2.jpg', category: 'nature' },
        { src: 'Assets/nature3.jpg', category: 'nature' },
        { src: 'Assets/nature4.jpg', category: 'nature' },
        { src: 'Assets/nature5.jpg', category: 'nature' },
        { src: 'Assets/nature6.jpg', category: 'nature' },
        { src: 'Assets/nature7.jpg', category: 'nature' },
        { src: 'Assets/architecture1.jpg', category: 'architecture' },
        { src: 'Assets/architecture2.jpg', category: 'architecture' },
        { src: 'Assets/architecture3.jpg', category: 'architecture' },
        { src: 'Assets/architecture4.jpg', category: 'architecture' },
        { src: 'Assets/architecture5.jpg', category: 'architecture' },
        { src: 'Assets/architecture6.jpg', category: 'architecture' },
        { src: 'Assets/architecture7.jpg', category: 'architecture' },
        { src: 'Assets/animal1.jpg', category: 'animal' },
        { src: 'Assets/animal2.jpg', category: 'animal' },
        { src: 'Assets/animal3.jpg', category: 'animal' },
        { src: 'Assets/animal4.jpg', category: 'animal' },
        { src: 'Assets/animal5.jpg', category: 'animal' },
        { src: 'Assets/animal6.jpg', category: 'animal' },
        { src: 'Assets/Animal7.jpg', category: 'animal' },
        // Add more images as needed
    ];
    


    function loadImages() {
        const fragment = document.createDocumentFragment();

        for (let i = itemsLoaded; i < itemsLoaded + itemsPerLoad && i < images.length; i++) {
            const item = document.createElement('div');
            item.className = `gallery-item ${images[i].category}`;
            item.innerHTML = `<img src="${images[i].src}" alt="${images[i].category}">`;
            item.addEventListener('click', function() {
                lightbox.style.display = 'block';
                lightboxImg.src = images[i].src;
            });
            fragment.appendChild(item);
        }

        galleryContainer.appendChild(fragment);
        itemsLoaded += itemsPerLoad;

        if (itemsLoaded >= images.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    function filterImages(filter) {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    loadMoreButton.addEventListener('click', loadImages);
    loadImages();

    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const filter = button.getAttribute('data-filter');
            filterImages(filter);
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});






















