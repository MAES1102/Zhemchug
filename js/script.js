/**
 * Romantic Website JavaScript
 * Handles all interactive features including animations, counters, and reveal effects
 */

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const loveButton = document.getElementById('loveButton');
    const loveMessage = document.getElementById('loveMessage');
    const secretButton = document.getElementById('secretButton');
    const secretSection = document.getElementById('secretSection');
    const heartsContainer = document.getElementById('heartsContainer');
    const sakuraContainer = document.getElementById('sakuraContainer');
    const daysCounter = document.getElementById('daysCounter');
    const hoursCounter = document.getElementById('hoursCounter');
    const minutesCounter = document.getElementById('minutesCounter');
    const secondsCounter = document.getElementById('secondsCounter');
    
    /**
     * LOVE MESSAGE REVEAL FUNCTIONALITY
     * Handles the main love message reveal when "Click me" button is pressed
     */
    loveButton.addEventListener('click', function() {
        // Animate button out
        loveButton.style.transition = 'all 0.5s ease';
        loveButton.style.opacity = '0';
        loveButton.style.transform = 'scale(0.8)';
        
        // Reveal love message with delay for smooth transition
        setTimeout(() => {
            loveButton.style.display = 'none';
            loveMessage.classList.remove('hidden');
            loveMessage.style.display = 'block';
            
            // Create celebratory heart burst
            createHeartBurst();
        }, 500);
    });
    
    /**
     * SECRET SECTION REVEAL FUNCTIONALITY
     * Handles the secret message reveal when "Secret" button is pressed
     */
    secretButton.addEventListener('click', function() {
        // Animate secret button out
        secretButton.style.transition = 'all 0.5s ease';
        secretButton.style.opacity = '0';
        secretButton.style.transform = 'scale(0.8)';
        
        // Reveal secret section with animation
        setTimeout(() => {
            secretButton.style.display = 'none';
            secretSection.classList.remove('hidden');
            secretSection.classList.add('reveal');
            
            // Create celebratory heart burst
            createHeartBurst();
            
            // Smooth scroll to secret section
            setTimeout(() => {
                secretSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 300);
        }, 500);
    });
    
    /**
     * FLOATING HEARTS ANIMATION SYSTEM
     * Creates and manages the continuous floating hearts effect
     */
    
    /**
     * Creates a single floating heart with random properties
     */
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Random horizontal position
        heart.style.left = Math.random() * 100 + '%';
        
        // Random size between 15px and 30px
        const size = Math.random() * 15 + 15;
        heart.style.fontSize = size + 'px';
        
        // Random animation duration between 4-8 seconds
        const duration = Math.random() * 4 + 4;
        heart.style.animationDuration = duration + 's';
        
        // Random delay to stagger the hearts
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        // Clean up heart after animation completes
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, (duration + 2) * 1000);
    }
    
    /**
     * Creates a burst of hearts for special moments
     * @param {number} count - Number of hearts to create (default: 15)
     */
    function createHeartBurst(count = 15) {
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 100);
        }
    }
    
    /**
     * Initializes the continuous heart animation system
     * Optimized for mobile performance
     */
    function startHeartAnimation() {
        // Detect mobile devices for performance optimization
        const isMobile = window.innerWidth <= 768;
        const heartCount = isMobile ? 2 : 3;
        const intervalMin = isMobile ? 4000 : 3000;
        const intervalMax = isMobile ? 6000 : 3000;
        
        // Create initial hearts with staggered timing
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => {
                createFloatingHeart();
            }, i * 2000);
        }
        
        // Continue creating hearts with mobile-optimized intervals
        setInterval(() => {
            createFloatingHeart();
        }, Math.random() * (intervalMax - intervalMin) + intervalMin);
    }
    
    // Initialize heart animation system
    startHeartAnimation();
    
    /**
     * SAKURA PETALS ANIMATION SYSTEM
     * Creates and manages the falling sakura petals effect
     */
    
    /**
     * Creates a single sakura petal with random properties
     */
    function createSakuraPetal() {
        const petal = document.createElement('div');
        petal.className = 'sakura-petal';
        
        // Random horizontal position
        petal.style.left = Math.random() * 100 + '%';
        
        // Random size between 8px and 15px
        const size = Math.random() * 7 + 8;
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
        
        // Random animation duration between 10-20 seconds
        const duration = Math.random() * 10 + 10;
        petal.style.animationDuration = duration + 's';
        
        // Random delay to stagger the petals
        petal.style.animationDelay = Math.random() * 5 + 's';
        
        sakuraContainer.appendChild(petal);
        
        // Clean up petal after animation completes
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, (duration + 5) * 1000);
    }
    
    /**
     * Initializes the continuous sakura petals animation system
     * Optimized for mobile performance
     */
    function startSakuraAnimation() {
        // Detect mobile devices for performance optimization
        const isMobile = window.innerWidth <= 768;
        const petalCount = isMobile ? 3 : 5;
        const intervalMin = isMobile ? 3000 : 2000;
        const intervalMax = isMobile ? 5000 : 2000;
        
        // Create initial petals with staggered timing
        for (let i = 0; i < petalCount; i++) {
            setTimeout(() => {
                createSakuraPetal();
            }, i * 2000);
        }
        
        // Continue creating petals with mobile-optimized intervals
        setInterval(() => {
            createSakuraPetal();
        }, Math.random() * (intervalMax - intervalMin) + intervalMin);
    }
    
    // Initialize sakura animation system
    startSakuraAnimation();
    
    /**
     * REAL-TIME TIMER FUNCTIONALITY
     * Calculates and displays real-time elapsed time since August 4, 2025
     */
    
    // Fixed start date: August 4, 2025 at 00:00:00
    const START_DATE = new Date('2025-08-04T00:00:00');
    
    /**
     * Calculates the elapsed time since the start date
     * @returns {Object} Object containing days, hours, minutes, seconds
     */
    function calculateElapsedTime() {
        const currentDate = new Date();
        const timeDifference = currentDate.getTime() - START_DATE.getTime();
        
        // Handle case where current date is before start date
        if (timeDifference < 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        return { days, hours, minutes, seconds };
    }
    
    /**
     * Updates the timer display with real-time elapsed time
     */
    function updateTimer() {
        const elapsed = calculateElapsedTime();
        
        // Update each counter element
        daysCounter.textContent = elapsed.days;
        hoursCounter.textContent = elapsed.hours;
        minutesCounter.textContent = elapsed.minutes;
        secondsCounter.textContent = elapsed.seconds;
        
        // Add pulse animation to seconds counter for visual feedback
        secondsCounter.style.transform = 'scale(1.1)';
        setTimeout(() => {
            secondsCounter.style.transform = 'scale(1)';
        }, 100);
        
        // Debug: Log the calculation for verification
        console.log(`Elapsed time: ${elapsed.days} days, ${elapsed.hours} hours, ${elapsed.minutes} minutes, ${elapsed.seconds} seconds`);
    }
    
    // Initialize timer immediately
    updateTimer();
    
    // Update timer every second for real-time display
    setInterval(updateTimer, 1000);
    
    /**
     * INTERACTIVE SPARKLE EFFECT
     * Creates sparkle effects when clicking anywhere on the page
     */
    
    /**
     * Creates a sparkle effect at the specified coordinates
     * @param {number} x - X coordinate for sparkle
     * @param {number} y - Y coordinate for sparkle
     */
    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.width = '6px';
        sparkle.style.height = '6px';
        sparkle.style.background = '#ff6b9d';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        // Clean up sparkle after animation
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
    
    // Add click sparkle effect to entire page
    document.addEventListener('click', function(e) {
        createSparkle(e.clientX, e.clientY);
    });
});

/**
 * DYNAMIC CSS INJECTION
 * Adds sparkle animation keyframes to the page
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: scale(1) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
