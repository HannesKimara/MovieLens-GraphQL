import { tsParticles } from "tsparticles";

const M = require("materialize-css");

document.addEventListener('DOMContentLoaded', () => {
    let options = {};
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, options);
});

tsParticles
  .loadJSON("tsparticles", "assets/particles.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
});