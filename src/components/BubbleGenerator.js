import { getRandom } from "..";
export const bubbleGenerator = () => {
  const divBubble = document.createElement("div");
  const nav = document.querySelector("nav");
  divBubble.classList.add("oneBubble");
  divBubble.style.setProperty("--x", getRandom(1, 19));
  nav.appendChild(divBubble);
  const bubbleAudio = new Audio("./assets/images/mixkit-water-bubble-1317.wav");
  divBubble.addEventListener("click", (e) => {
    bubbleAudio.play();
    setTimeout(() => {
      divBubble.style.display = "none";
    }, 100);
  });
  setTimeout(() => {
    nav.removeChild(divBubble);
  }, getRandom(3000, 6000));
};
