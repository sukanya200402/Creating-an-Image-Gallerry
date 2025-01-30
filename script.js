const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('fullScreenModal');
const modalImage = document.getElementById('fullScreenImage');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImageIndex = 0;

// Open modal and display clicked image
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = image.src;
    currentImageIndex = index;
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Navigate images in modal
prevBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  modalImage.src = images[currentImageIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  modalImage.src = images[currentImageIndex].src;
});

// Close modal if clicked outside the image
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
