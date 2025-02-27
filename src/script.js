document.addEventListener("DOMContentLoaded", () => {
  const themeToggles = document.querySelectorAll(".theme-toggle");
  const htmlElement = document.documentElement;

  function updateButtonText() {
    themeToggles.forEach((button) => {
      button.textContent = htmlElement.classList.contains("dark")
        ? "[theme: dark]"
        : "[theme: light]";
    });
  }

  if (localStorage.getItem("theme") === "light") {
    htmlElement.classList.remove("dark");
  } else {
    htmlElement.classList.add("dark");
  }

  updateButtonText();

  themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        htmlElement.classList.contains("dark") ? "dark" : "light"
      );

      updateButtonText();
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const h3Element = document.getElementById("headline");
  const texts = [
    "product engineer",
    "frontend developer",
    "web designer",
    "technical specialist",
    "product engineer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 75;
  let pauseDuration = 1500;
  let cursorVisible = true;
  let finalWordTyping = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    // Handle final word typing separately
    if (finalWordTyping) {
      if (charIndex <= texts[texts.length - 1].length) {
        h3Element.innerHTML =
          texts[texts.length - 1].substring(0, charIndex) +
          (cursorVisible ? "|" : "");
        charIndex++;
        setTimeout(typeEffect, 75);
      } else {
        // We've finished typing the final word, start blinking cursor
        blinkCursor();
      }
      return;
    }

    if (isDeleting) {
      // Deleting text
      h3Element.innerHTML =
        currentText.substring(0, charIndex) + (cursorVisible ? "|" : "");
      charIndex--;
      typingSpeed = 50;

      // If we've finished deleting
      if (charIndex < 0) {
        isDeleting = false;
        textIndex++;
        charIndex = 0;

        // If we've reached the last element in the array
        if (textIndex >= texts.length - 1) {
          // Start typing the final "product engineer" with animation
          finalWordTyping = true;
          charIndex = 0;
          setTimeout(typeEffect, typingSpeed);
          return;
        }
      }
    } else {
      // Typing text
      h3Element.innerHTML =
        currentText.substring(0, charIndex) + (cursorVisible ? "|" : "");
      charIndex++;
      typingSpeed = 50;

      // If we've finished typing the current word
      if (charIndex > currentText.length) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      }
    }

    setTimeout(typeEffect, typingSpeed);
  }

  function blinkCursor() {
    cursorVisible = !cursorVisible;
    h3Element.innerHTML = texts[texts.length - 1] + (cursorVisible ? "|" : "");
    setTimeout(blinkCursor, 500);
  }

  // Start the typing effect
  typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
  const headline = document.getElementById("name");

  headline.addEventListener("mouseover", function () {
    headline.textContent = "ダーニッシュ";
  });

  headline.addEventListener("mouseout", function () {
    headline.textContent = "danish";
  });
});
