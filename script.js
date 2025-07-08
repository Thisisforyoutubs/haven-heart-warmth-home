
// Simple JavaScript functionality
function showMessage() {
    const messageArea = document.getElementById('messageArea');
    const button = document.querySelector('.cta-button');
    
    if (messageArea.style.display === 'none' || messageArea.style.display === '') {
        messageArea.style.display = 'block';
        button.textContent = 'Hide Message';
    } else {
        messageArea.style.display = 'none';
        button.textContent = 'Get Started';
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for any future navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Add some hover effects for feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
