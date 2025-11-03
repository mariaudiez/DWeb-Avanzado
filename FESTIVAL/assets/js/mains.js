document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const headerTitle = document.querySelector("#headerTitle");
    headerTitle.classList.add("active");

    const background = document.querySelector(".white-cover");
    background.classList.add("active");
  }, 1000);

  const webCards = document.querySelectorAll(".web-card");

  webCards.forEach(function (card) {
    // Este bloque se ejecuta al hacer hover
    card.addEventListener("mouseenter", function () {
      let title = card.querySelector(".web-card-title");
      title.classList.add("active");

      const img = card.querySelector(".card-img");
      img.classList.add("active");
    });

    card.addEventListener("mouseleave", function () {
      let title = card.querySelector(".web-card-title");
      title.classList.remove("active");

      const img = card.querySelector(".card-img");
      img.classList.remove("active");
    });
  });
});
