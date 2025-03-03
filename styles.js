document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(0);
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    const downloadCvBtn = document.querySelector(".btn");
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener("click", function (e) {
            e.preventDefault();
            const confirmDownload = confirm("Do you want to download Stacy Waithera's CV?");
            if (confirmDownload) {
                window.location.href = "path-to-your-cv.pdf"; 
            }
        });
    }
});