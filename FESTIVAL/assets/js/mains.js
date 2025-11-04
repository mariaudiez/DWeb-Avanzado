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

const modal = document.querySelector("#modal");
const modalTrigger = document.querySelector("#modal-trigger");

modalTrigger.addEventListener("click", function () {
  //Añade un gestor de evento al click
  modal.classList.remove("hidden");
});

modal.addEventListener("click", function (event) {
  //event.target es el objetivo del evento, en este caso es el elemento html donde hemos hecho el click

  if (event.target.classList.contains("modal-background")) {
    modal.classList.add("hidden");
  }
});
