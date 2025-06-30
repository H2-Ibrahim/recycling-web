document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your pickup request has been submitted successfully!');
});

// Animation

AOS.init();

// Write letter by letter

const message = "Save the planet";
const element = document.getElementById("Text");
let index = 0;

function typeLetterByLetter() {
    if (index < message.length) {
        element.textContent += message.charAt(index);
        index++;
        setTimeout(typeLetterByLetter, 250);
    }
}

typeLetterByLetter();

// SCROLL TO TOP

const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// LI Active

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav li a");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove("home");
                    if (link.getAttribute("href").substring(1) === entry.target.id) {
                        link.classList.add("home");
                    }
                });
            }
        });
    },
    {
        threshold: 0.5,
    }
);

sections.forEach(section => observer.observe(section));