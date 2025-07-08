
// Screen navigation and app functionality

// Current screen state
let currentScreen = 'welcome';

// Sample letters for different moods
const letters = {
    sad: {
        image: "🌸",
        content: `
            <p>My dearest friend,</p>
            <p>I know today feels heavy, and that's okay. Sometimes our hearts need to feel the weight of things before they can heal. You don't have to be strong right now - you don't have to be anything other than exactly who you are in this moment.</p>
            <p>Remember that sadness is not your enemy. It's proof that you have a beautiful, feeling heart. It shows how deeply you care, how much you love, how genuinely you experience this world.</p>
            <p>You are not alone in this feeling. I'm here with you, even in the silence, even in the tears. Take all the time you need. Tomorrow will be different, but for now, just breathe.</p>
            <p>You are so loved, more than you could ever know.</p>
        `
    },
    scared: {
        image: "🌙",
        content: `
            <p>Sweet friend,</p>
            <p>Fear has this way of making everything seem bigger and scarier than it really is, doesn't it? Right now, your mind might be racing with "what ifs" and worst-case scenarios, but I want you to know something important: you are braver than you believe.</p>
            <p>Think about all the times you've been scared before and somehow made it through. You're still here, still fighting, still growing. That's not luck - that's your incredible strength.</p>
            <p>It's okay to feel scared. Courage isn't the absence of fear; it's feeling the fear and choosing to keep going anyway. And you don't have to go alone - I'm right here beside you, cheering you on every step of the way.</p>
            <p>You've got this. And more importantly, you've got me.</p>
        `
    },
    insecure: {
        image: "⭐",
        content: `
            <p>Beautiful soul,</p>
            <p>I wish you could see yourself through my eyes right now. I wish you could see the way you light up a room, the way your kindness touches everyone around you, the way your laugh makes even the cloudiest days feel sunny.</p>
            <p>Those voices in your head telling you you're not enough? They're lying. They're fears dressed up as facts, and they don't get to define your worth.</p>
            <p>You are enough - not because of what you do or achieve, but because of who you are. Your heart, your spirit, your unique way of seeing the world - these things make you irreplaceable.</p>
            <p>Please be gentle with yourself today. Treat yourself with the same kindness you show others. You deserve every bit of love you give so freely.</p>
        `
    },
    lonely: {
        image: "🦋",
        content: `
            <p>My dear friend,</p>
            <p>Loneliness can feel like the heaviest weight, can't it? Like you're floating in space with no one to hear you or see you. But I want you to know that even when you feel most alone, you're not invisible to me.</p>
            <p>I think about you more often than you know. I wonder how you're doing, I smile when I remember our conversations, I send you good thoughts when I see things that remind me of you (which is surprisingly often!).</p>
            <p>Distance doesn't diminish connection, and silence doesn't mean absence. Our friendship lives in my heart always, and you carry a piece of me with you wherever you go.</p>
            <p>Until we can be together again, remember that love travels through time and space. You are held, you are seen, you are cherished.</p>
        `
    },
    overwhelmed: {
        image: "🌿",
        content: `
            <p>Sweet friend,</p>
            <p>I can feel the weight you're carrying right now, and I want you to know it's okay to set some of it down. You don't have to carry everything at once. You don't have to be everything to everyone.</p>
            <p>Take a deep breath with me. In... and out. Feel your feet on the ground. You are here, you are present, and right now, in this moment, you are safe.</p>
            <p>Sometimes the best thing we can do when everything feels like too much is to choose just one small thing - one task, one breath, one step. You don't have to solve everything today.</p>
            <p>Be patient with yourself. Give yourself permission to take breaks, to ask for help, to say no to things that don't serve you. You matter more than any to-do list ever could.</p>
        `
    },
    anxious: {
        image: "☁️",
        content: `
            <p>Dearest friend,</p>
            <p>I know your mind is spinning right now, creating stories and scenarios that may never happen. Anxiety has this cruel way of stealing our present moment and making us live in imaginary futures.</p>
            <p>But right here, right now, you are okay. Look around you. Notice five things you can see, four things you can touch, three things you can hear. Come back to this moment, where you are safe.</p>
            <p>Your feelings are valid, but they are not facts. That racing heart and those spinning thoughts - they're your mind trying to protect you, but sometimes our protector gets a little overzealous.</p>
            <p>You have weathered every storm that's come your way so far. You're stronger and more resilient than your anxiety wants you to believe. This feeling will pass, and I'll be here with you until it does.</p>
        `
    }
};

// Navigation functions
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen with delay for smooth transition
    setTimeout(() => {
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            currentScreen = screenId.replace('Screen', '');
        }
    }, 150);
}

function showWelcome() {
    showScreen('welcomeScreen');
}

function showMoodSelection() {
    showScreen('moodScreen');
}

function showLetter(mood) {
    const letter = letters[mood];
    if (letter) {
        // Update letter content
        document.getElementById('letterImage').textContent = letter.image;
        document.getElementById('letterBody').innerHTML = letter.content;
        
        // Show letter screen
        showScreen('letterScreen');
    }
}

function showMemoryGallery() {
    showScreen('galleryScreen');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add subtle animations to mood cards
    const moodCards = document.querySelectorAll('.mood-card');
    moodCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
    
    // Add floating animation to memory cards
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }, index * 100);
    });
    
    // Add gentle parallax effect to backgrounds
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const backgrounds = document.querySelectorAll('.letter-image, .memory-image');
        backgrounds.forEach(bg => {
            bg.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    });
    
    // Add touch-friendly interactions for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
});

// Add some encouraging console messages (because why not!)
console.log('💕 Heart Haven loaded with love');
console.log('✨ Remember: You are loved, you are enough, you matter');

// Simple analytics (just for fun, tracks screen views)
function trackScreen(screenName) {
    console.log(`💝 Visited: ${screenName} - sending love and positive vibes`);
}

// Track screen changes
const originalShowScreen = showScreen;
showScreen = function(screenId) {
    originalShowScreen(screenId);
    trackScreen(screenId.replace('Screen', ''));
};
