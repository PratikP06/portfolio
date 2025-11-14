import { useEffect } from "react";

export default function useFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");  // ⭐ Make it reversible
        }

      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));
  }, []);
}
