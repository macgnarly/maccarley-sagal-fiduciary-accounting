(function () {
  "use strict";

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var revealTargets = document.querySelectorAll("[data-reveal], [data-reveal-stagger]");

  // Stagger children by index so any list length (5 services, 10
  // timeline steps, 2 footer columns) fans out evenly on reveal.
  document.querySelectorAll("[data-reveal-stagger]").forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.transitionDelay = Math.min(i * 0.08, 0.56) + "s";
    });
  });

  function revealNow(el) { el.classList.add("is-visible"); }

  if ("IntersectionObserver" in window && revealTargets.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            revealNow(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(function (el) { observer.observe(el); });

    // Safety net: web-font swaps can shift layout after the initial
    // intersection check, so re-verify once fonts/images settle.
    window.addEventListener("load", function () {
      revealTargets.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          revealNow(el);
          observer.unobserve(el);
        }
      });
    });
  } else {
    revealTargets.forEach(revealNow);
  }

  // Contact form (submits to Formspree)
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form && note) {
    var submitBtn = form.querySelector("button[type='submit']");
    var submitBtnDefaultHTML = submitBtn ? submitBtn.innerHTML : "";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }
      note.textContent = "";
      note.classList.remove("form-note--error");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            note.textContent = "Thank you. We'll be in touch within one business day.";
            form.reset();
          } else {
            return response.json().then(function (data) {
              var message =
                data && data.errors && data.errors.length
                  ? data.errors.map(function (err) { return err.message; }).join(", ")
                  : "Something went wrong. Please try again or email us directly.";
              throw new Error(message);
            });
          }
        })
        .catch(function (error) {
          note.classList.add("form-note--error");
          note.textContent = error.message || "Something went wrong. Please try again or email us directly.";
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = submitBtnDefaultHTML;
          }
        });
    });
  }
})();
