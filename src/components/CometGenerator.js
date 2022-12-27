import { getRandom } from "..";
const starContainer = document.querySelector(".star-container");
export const cometGenerator = () => {
  const divComet = document.createElement("div");
  divComet.classList.add("comet");
  const animacija = getRandom(1, 4);
  divComet.style.animation = `cometAnimation${animacija} 1.5s ease`;
  starContainer.appendChild(divComet);
  setTimeout(() => {
    starContainer.removeChild(divComet);
  }, 1510);
};
