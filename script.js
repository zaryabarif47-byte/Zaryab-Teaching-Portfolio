
/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.classList.toggle("is-open", isOpen);
    });

}


/* =====================================
   DROPDOWN MENUS
===================================== */

const dropdowns = document.querySelectorAll(".nav-dropdown");

dropdowns.forEach((dropdown) => {

    const button = dropdown.querySelector(".dropdown-toggle");

    button.addEventListener("click", (event) => {

        event.stopPropagation();

        const isAlreadyOpen = dropdown.classList.contains("open");

        // Close all dropdowns first
        dropdowns.forEach((item) => {
            item.classList.remove("open");
        });

        // Open the selected dropdown
        if (!isAlreadyOpen) {
            dropdown.classList.add("open");
        }

    });

});


/* Close dropdowns when clicking outside */

document.addEventListener("click", (event) => {

    if (!event.target.closest(".nav-dropdown")) {
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });
    }

});


/* =====================================
   CLOSE MOBILE MENU AFTER NAVIGATION
===================================== */

document.querySelectorAll("#navLinks a").forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks && menuToggle) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
        }

        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("open");
        });

    });

});


/* =====================================
   CLOSE MOBILE MENU WHEN RESIZED
===================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 850 && navLinks && menuToggle) {

        navLinks.classList.remove("active");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* =====================================
   BOOKING FORM - WHATSAPP
===================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const studentName =
            document.getElementById("studentName").value.trim();

        const studentSubject =
            document.getElementById("studentSubject").value;

        const studentLevel =
            document.getElementById("studentLevel").value.trim();

        const lessonTime =
            document.getElementById("lessonTime").value;

        const studentMessage =
            document.getElementById("studentMessage").value.trim();


        // Check required information
        if (!studentName || !studentSubject || !studentLevel || !lessonTime) {

            alert("Please complete all required fields.");

            return;

        }


        // Create booking message
        const message = `
Hello Zaryab Arif!

I would like to request a tutoring lesson.

Student Name: ${studentName}
Subject: ${studentSubject}
Class / Level: ${studentLevel}
Preferred Time: ${lessonTime}

Additional Details:
${studentMessage || "No additional details provided."}

Please let me know about the lesson arrangements.
        `.trim();


        // Your WhatsApp number
        const whatsappNumber = "923146510087";


        // Create WhatsApp URL
        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;


        // Open WhatsApp
        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}


/* =====================================
   AUTOMATIC FOOTER YEAR
===================================== */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Separate Feedback Form
const feedbackForm = document.getElementById("feedbackForm");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("feedbackName").value.trim();
        const subject = document.getElementById("feedbackSubject").value;
        const rating = document.getElementById("feedbackRating").value;
        const message = document.getElementById("feedbackMessage").value.trim();
        const permission = document.getElementById("feedbackPermission").checked;

        const whatsappMessage =
            "Hello Zaryab! I would like to share my teaching feedback.\n\n" +
            "Name: " + name + "\n" +
            "Subject: " + subject + "\n" +
            "Rating: " + rating + "\n" +
            "Feedback: " + message + "\n\n" +
            "Permission to display feedback publicly: " +
            (permission ? "Yes" : "No");

        const whatsappURL =
            "https://wa.me/923146510087?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
}
