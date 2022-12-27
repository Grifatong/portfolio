import { getRandom } from "..";
const starContainer = document.querySelector(".star-container");
export const starGenerator = () => {
  const star = document.createElement("div");
  star.classList.add("star");

  let top = getRandom(5, 95);
  let left = getRandom(5, 95);
  let piksel = getRandom(1, 5);
  if (piksel >= 3) {
    star.style.animation = `starLight infinite`;
    star.style.animationDuration = `${piksel}s`;
  }
  star.style.top = `${top}%`;
  star.style.left = `${left}%`;
  star.style.width = `${piksel}px`;
  star.style.height = `${piksel}px`;

  starContainer.appendChild(star);
};
