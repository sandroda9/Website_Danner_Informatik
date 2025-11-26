/* ============================================================
   Smooth Scrolling
   ============================================================ */

document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ============================================================
   Fade-in on scroll
   ============================================================ */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-in, .fade-slide-in").forEach(el => {
    observer.observe(el);
});

/* ============================================================
   Dark / Light Mode Toggle
   ============================================================ */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// load saved mode
if (localStorage.getItem("theme") === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Save preference
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});

/* ============================================================
   Tilt Effect – 3D Hover Cards
   ============================================================ */

document.querySelectorAll(".tilt").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rotX = (y - r.height / 2) / 20;
        const rotY = (x - r.width / 2) / -20;

        card.style.transform =
            `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(600px) rotateX(0) rotateY(0)";
    });
});
