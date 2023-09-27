"use strict";

/* import { someFunction } from "./module.js";

someFunction("This is a module function"); */

const cardContatos = document.querySelectorAll(".container-card");
const detalhesContatos = document.querySelectorAll(".detalhes-contato");

const mostrarDetalhesContato = function () {
  cardContatos.forEach((card, index) => {
    card.addEventListener("mouseover", () => {
      detalhesContatos[index].classList.add("active");
    });

    card.addEventListener("mouseout", () => {
      detalhesContatos[index].classList.remove("active");
    });
  });
};

mostrarDetalhesContato();
