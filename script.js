document.addEventListener("DOMContentLoaded", () => {
    // Effetti fade-in
    const fadeInElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.5}s`;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => observer.observe(el));

    // Cookie banner
    if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesRejected")) {
        const cookieBanner = document.createElement("div");
        cookieBanner.id = "cookie-banner";
        cookieBanner.innerHTML = `
            <div class="cookie-content">
                <p>Questo sito si serve dei cookies per garantire la miglior esperienza possibile.</p>
                <p>Premendo "Accetta" acconsenti all'uso dei cookies.</p>
                <p>Per maggiori informazioni, leggere l'<a href="https://www.garanteprivacy.it/temi/informativa" target="_blank">Informativa</a>.</p>
                <button id="accept-cookies">Accetta</button> 
                <button id="reject-cookies">Continua senza</button>
            </div>`;
        document.body.appendChild(cookieBanner);

        const acceptBtn = document.getElementById("accept-cookies");
        const rejectBtn = document.getElementById("reject-cookies");

        if (acceptBtn && rejectBtn) {
            acceptBtn.addEventListener("click", () => {
                localStorage.setItem("cookiesAccepted", "true");
                cookieBanner.style.display = "none";
            });

            rejectBtn.addEventListener("click", () => {
                localStorage.setItem("cookiesRejected", "true");
                cookieBanner.style.display = "none";
            });
        }
    }
});
