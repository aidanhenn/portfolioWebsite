document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".animate-left");

  elementsToAnimate.forEach(function (element) {
    animateOnScroll(element);
  });

  function animateOnScroll(element) {
    if (!element) {
      console.error("Element not found.");
      return;
    }

    document.addEventListener("scroll", function () {
      const clientHeight = document.documentElement.clientHeight;
      const elementY = element.getBoundingClientRect().y;
      const elementHeight = element.getBoundingClientRect().height;

      if (clientHeight > elementY + (elementHeight * 2 / 3)) {
        element.classList.add("show-left");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const elementsToAnimate = document.querySelectorAll(".animate-right");

  elementsToAnimate.forEach(function (element) {
    animateOnScroll(element);
  });

  function animateOnScroll(element) {
    if (!element) {
      console.error("Element not found.");
      return;
    }

    document.addEventListener("scroll", function () {
      const clientHeight = document.documentElement.clientHeight;
      const elementY = element.getBoundingClientRect().y;
      const elementHeight = element.getBoundingClientRect().height;

      if (clientHeight > elementY + (elementHeight * 2 / 3)) {
        element.classList.add("show-right");
      }
    });
  }
});
