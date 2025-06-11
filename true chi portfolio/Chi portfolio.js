let darkMode = false;

document.addEventListener("DOMContentLoaded", () => {
  const darkButton = document.getElementById("dark-mode");
  const body = document.body;
  const nav = document.querySelector("nav");

  darkButton.addEventListener("click", () => {
    if (!body.classList.contains("dark-mode")) {
      body.classList.remove("bg-light", "text-dark");
      body.classList.add("bg-dark", "text-light");

      nav.classList.remove("navbar-light", "bg-light");
      nav.classList.add("navbar-dark", "bg-dark");

      darkButton.textContent = "🔆"; // Light mode icon
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("bg-dark", "text-light", "dark-mode");
      body.classList.add("bg-light", "text-dark");

      nav.classList.remove("navbar-dark", "bg-dark");
      nav.classList.add("navbar-light", "bg-light");

      darkButton.textContent = "🌑"; // Dark mode icon
    }
  });
});


// Contact form 
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submitBtn")
  const formStatus = document.getElementById("formStatus")

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault()

      submitBtn.disabled = true
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...'

      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value
      const toEmail = "okpeamaka8@gmail.com"
      const mailtoLink = `mailto:${encodeURIComponent(toEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;


      // Show success message
      formStatus.innerHTML = `
        <div class="alert alert-success mt-3">
          <p>Thank you for your message!</p>
          <p>If your email client doesn't open automatically, you can <a href="${mailtoLink}" class="alert-link">click here</a> to send the email manually.</p>
        </div>
      `
      contactForm.reset()

      setTimeout(() => {
        submitBtn.disabled = false
        submitBtn.innerHTML = "Submit"
      }, 2000)

      // Open mailto link
      window.location.href = mailtoLink
    })
  }
})

// Typing animation
document.addEventListener("DOMContentLoaded", function () {
  const name = document.getElementById("name");
  const description = document.getElementById("description");

  setTimeout(() => {
    name.style.animation = "typing 2s steps(30, end) forwards";
  }, 500);

  setTimeout(() => {
    description.style.animation = "typing 2s steps(30, end) forwards";
  }, 3000);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  });

  document.querySelectorAll(".animate").forEach((el) => observer.observe(el));
});

// Restore scroll position
window.onload = function () {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10));
  }
};

window.onbeforeunload = function () {
  localStorage.setItem("scrollPosition", window.scrollY);
};
