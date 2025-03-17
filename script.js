document.addEventListener("DOMContentLoaded", () => {
    // Effetti fade-in
    const fadeInElements = document.querySelectorAll(".fade-in");

    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeInElements.forEach(el => observer.observe(el));
    }

    // Banner dei cookie
    if (!localStorage.getItem("cookiesAccepted")) {
        const cookieBanner = document.createElement("div");
        cookieBanner.id = "cookie-banner";
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p>Questo sito si serve dei cookies per garantire la miglior esperienza possibile.</p>
                <p>Premendo "Accetta" acconsenti all'uso dei cookies.</p>
                <p>Per maggiori informazioni, leggere l'<a href="https://www.garanteprivacy.it/temi/informativa" target="_blank" rel="noopener noreferrer">Informativa</a>.</p>
                <button id="accept-cookies">Accetta</button>
            </div>`;
        document.body.appendChild(cookieBanner);

        const acceptBtn = document.getElementById("accept-cookies");

        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => {
                localStorage.setItem("cookiesAccepted", "true");
                cookieBanner.remove();
            });
        }
    }
});
