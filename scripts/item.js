// Thumbnail switch
const thumbs = document.querySelectorAll('.thumbnails-img');
const mainProduct = document.getElementById('mainProduct');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // remove active class from the currently active thumbnail
        document.querySelector('.thumbnails-img.active').classList.remove('active');

        // add active class to the clicked one
        thumb.classList.add('active');

        // change main product image to clicked thumbnail's image
        const img = thumb.querySelector('img'); // ✅ safer than firstChild
        mainProduct.src = img.src;
    });
});


// Quantity control
let qty = 1;
const qtySpan = document.getElementById('qty');
document.getElementById('increase').addEventListener('click', () => {
    qty++;
    qtySpan.textContent = qty;
});
document.getElementById('decrease').addEventListener('click', () => {
    if (qty > 1) {
        qty--;
        qtySpan.textContent = qty;
    }
});

// Size selection
const sizes = document.querySelectorAll('.size-option:not(.disabled)');
sizes.forEach(size => {
    size.addEventListener('click', () => {
        document.querySelector('.size-option.active').classList.remove('active');
        size.classList.add('active');
    });
});

// Color selection
const colors = document.querySelectorAll('.color-option');
colors.forEach(color => {
    color.addEventListener('click', () => {
        document.querySelector('.color-option.active').classList.remove('active');
        color.classList.add('active');
    });
});