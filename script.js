        // Mouse follow effect
        document.addEventListener('mousemove', (e) => {
            const follower = document.querySelector('.mouse-follow');
            follower.style.left = `${e.clientX}px`;
            follower.style.top = `${e.clientY}px`;
        });

        // Parallax effect for gradient blobs
        document.addEventListener('mousemove', (e) => {
            const blobs = document.querySelectorAll('.gradient-blob');
            const speed = 0.3;
            
            blobs.forEach((blob, index) => {
                const x = (window.innerWidth - e.pageX * speed * (index + 1)) / 100;
                const y = (window.innerHeight - e.pageY * speed * (index + 1)) / 100;
                blob.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Initial animation trigger
        window.addEventListener('load', () => {
            document.querySelector('.hero-title').style.animation = 'fadeInUp 1s ease-out forwards';
        });

        // Popup form logic
        const contactBtn = document.querySelector('.cta-button');
        const popup = document.getElementById('contact-popup');
        const closeBtn = document.querySelector('.close-btn');
        const overlay = document.querySelector('.popup-overlay');

contactBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Prevent background scroll
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.style.overflow = '';
});

// Automatically open popup after 10 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }, 5500); // 10000 milliseconds = 10 seconds
});