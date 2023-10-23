 // Function to display images based on category
 function displayImagesByCategory(category) {
    fetch('/JSON/images.json')
        .then(response => response.json())
        .then(data => {
            const imageGallery = document.getElementById('imageGallery');
            imageGallery.innerHTML = ''; // Clear existing images
            data.forEach(image => {
                if (category === 'all' || image.includes(category)) {
                    const img = document.createElement('img');
                    img.src = image;
                    img.alt = image;
                    imageGallery.appendChild(img);
                }
            });
        })
        .catch(error => console.error('Error:', error));
}

const categoryButtons = document.querySelectorAll('.category-button');

// Add event listeners to the category buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        const category = button.getAttribute('data-category');
        displayImagesByCategory(category);
    });
});

// Display all images by default
displayImagesByCategory('all');