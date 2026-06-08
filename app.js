// Initialization of GSAP Core Scroll Plugins
gsap.registerPlugin(ScrollTrigger);

// 1. MOBILE ADVANCED AUTOPLAY MUSIC STRATEGY 
const bgMusic = document.getElementById('bg-music');
const toastNotification = document.getElementById('audio-toast');
let audioInitiated = false;

function triggerAudioContext() {
    if (!audioInitiated) {
        bgMusic.play().then(() => {
            audioInitiated = true;
            
            // Pop up smooth temporary confirmation toast to user
            toastNotification.style.transform = "translateX(-50%) translateY(0px)";
            setTimeout(() => {
                toastNotification.style.transform = "translateX(-50%) translateY(100px)";
            }, 3000);
            
            // Cleanup standard application event loop listeners
            removeInteractionListeners();
        }).catch(error => {
            console.log("Waiting for touch interaction initialization path vector...", error);
        });
    }
}

function removeInteractionListeners() {
    window.removeEventListener('touchstart', triggerAudioContext);
    window.removeEventListener('scroll', triggerAudioContext);
    window.removeEventListener('click', triggerAudioContext);
}

// Attach event listeners to catch any initial movement or swipe path instantly
window.addEventListener('touchstart', triggerAudioContext);
window.addEventListener('scroll', triggerAudioContext);
window.addEventListener('click', triggerAudioContext);


// 2. HERO CARD REVEAL INTRO TIMELINE
window.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline();
    
    tl.from('.hero-image-frame img', {
        scale: 1.3,
        duration: 1.8,
        ease: 'power3.out'
    })
    .from('.hero-glass-card', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
    }, "-=1.2");
});


// 3. SCROLL REVEAL VIEWPORT STAGGER EFFECTS
gsap.utils.toArray('.scroll-reveal').forEach((panel) => {
    gsap.from(panel, {
        scrollTrigger: {
            trigger: panel,
            start: 'top 90%', // Triggers early on mobile screens
            toggleActions: 'play none none none'
        },
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out'
    });
});


// 4. PARALLAX ASYMMETRICAL MOVEMENT ON THE STACKED IMAGES
gsap.to('.card-left', {
    scrollTrigger: {
        trigger: '.gallery-stack',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    },
    y: -30
});

gsap.to('.card-right', {
    scrollTrigger: {
        trigger: '.gallery-stack',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
    },
    y: 30
});