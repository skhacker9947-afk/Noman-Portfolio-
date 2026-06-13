// ==========================================================================
// 1. Typing Effect (Home Section)
// ==========================================================================
const text = "Frontend Developer";
let index = 0;

function typeEffect() {
    const heading = document.getElementById("typing-text");

    if (heading && index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("load", () => {
    const heading = document.querySelector("#home h3");
    if (heading) {
        heading.textContent = "";
        typeEffect();
    }
});

// ==========================================================================
// 2. Scroll Animation (Fade In Sections)
// ==========================================================================
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);
});

// ==========================================================================
// 3. Active Navbar Link Highlighting on Scroll
// ==========================================================================
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        // Dropdown open hone par override rules ko block karne ke liye safe style reset
        const navLinksList = document.getElementById('nav-links');
        if (navLinksList && !navLinksList.classList.contains('active')) {
            link.style.color = "white";
            if (link.getAttribute("href") === "#" + current) {
                link.style.color = "#38bdf8"; // Active links desktop par blue honge
            }
        }
    });
});

// ==========================================================================
// 4. 📱 MOBILE DROPDOWN OVERLAY LOGIC (New Style Based)
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinksList = document.getElementById('nav-links');
    const logoText = document.querySelector('nav h2'); // Shaikh Noman Text Select

    if (menuToggle && navLinksList) {
        // Hamburger Icon par click logic
        menuToggle.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
            menuToggle.classList.toggle('is-active'); // Isse lines cross ('X') banegi

            // Overlay open hone par text colors manage karne ke liye rules
            if (navLinksList.classList.contains('active')) {
                if (logoText) logoText.style.color = '#0f172a'; // White background par logo dark blue ho jaye
            } else {
                if (logoText) logoText.style.color = 'white'; // Band hone par wapas white
            }
        });

        // Dropdown menu ke kisi bhi link par click karte hi menu smoothly band ho jaye
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('active');
                menuToggle.classList.remove('is-active');
                if (logoText) logoText.style.color = 'white';
            });
        });
    }
});

// Smooth Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to Shaikh Noman Portfolio");
});
