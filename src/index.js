const body = document.body;
const navBtn = document.querySelector("#nav-toggle");
const homeNavBtn = document.querySelector("#homeBtn");
const aboutNavBtn = document.querySelector("#aboutBtn");
const myworkNavBtn = document.querySelector("#my_workBtn");
const contactNavBtn = document.querySelector("#contactBtn");
const homePage = document.querySelector("#home");
const aboutPage = document.querySelector("#about");
const workPage = document.querySelector("#work");
const contactPage = document.querySelector("#contact");
const allNavPBtns = document.querySelectorAll("ul li p");
const pages = document.querySelectorAll(".page");
const pageIdHome = document.querySelector(".pageIdHome");
const pageIdAbout = document.querySelector(".pageIdAbout");
const pageIdWork = document.querySelector(".pageIdWork");
const pageIdContact = document.querySelector(".pageIdContact");
// min and max included
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const checkScreenWidth = () => {
  setTimeout(() => {
    if (screen.width < 770 || window.innerWidth < 770) {
      body.dataset.nav = "false";
    }
  }, 500);
};
window.onload = () => {
  checkScreenWidth();
};

import { bubbleGenerator } from "./components/BubbleGenerator";
setInterval(() => {
  bubbleGenerator();
}, getRandom(3000, 7000));

const starContainer = document.querySelector(".star-container");

import { starGenerator } from "./components/StarGenerator";
const width = Math.floor(starContainer.offsetWidth / 25);
for (let i = 0; i < width; i++) {
  starGenerator();
}

import { cometGenerator } from "./components/CometGenerator";
setInterval(() => {
  cometGenerator();
}, getRandom(6000, 15000));

navBtn.addEventListener("click", (e) => {
  body.dataset.nav = body.dataset.nav === "true" ? "false" : "true";
});
homeNavBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  homeNavBtn.classList.add("activated");
  homePage.classList.add("showPage");
  checkScreenWidth();
});
aboutNavBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  aboutNavBtn.classList.add("activated");
  aboutPage.classList.add("showPage");
  checkScreenWidth();
});
myworkNavBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  myworkNavBtn.classList.add("activated");
  workPage.classList.add("showPage");
  checkScreenWidth();
});
contactNavBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  contactNavBtn.classList.add("activated");
  contactPage.classList.add("showPage");
  checkScreenWidth();
});
pageIdHome.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  homeNavBtn.classList.add("activated");
  homePage.classList.add("showPage");
  checkScreenWidth();
});
pageIdAbout.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  aboutNavBtn.classList.add("activated");
  aboutPage.classList.add("showPage");
  checkScreenWidth();
});
pageIdWork.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  myworkNavBtn.classList.add("activated");
  workPage.classList.add("showPage");
  checkScreenWidth();
});
pageIdContact.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  contactNavBtn.classList.add("activated");
  contactPage.classList.add("showPage");
  checkScreenWidth();
});

const contactBtn = document.querySelector(".openContact");
contactBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    if (page.classList.contains("showPage")) {
      page.classList.remove("showPage");
    }
  });
  allNavPBtns.forEach((btn) => {
    if (btn.classList.contains("activated")) {
      btn.classList.remove("activated");
    }
  });
  contactNavBtn.classList.add("activated");
  contactPage.classList.add("showPage");
  checkScreenWidth();
});

const educationBtn = document.querySelector("#educationBtn");
const educationContent = document.querySelector("#educationContent");
educationBtn.addEventListener("click", (e) => {
  educationContent.classList.toggle("showHide");
  educationBtn.classList.toggle("special");
});

const workBtn = document.querySelector("#workBtn");
const workContent = document.querySelector("#workContent");
workBtn.addEventListener("click", (e) => {
  workContent.classList.toggle("showHide");
  workBtn.classList.toggle("special");
});

import workSources from "./components/WorkSources";
import { RenderWorkCards } from "./components/RenderWorkCards";
workSources.forEach((workSource) => {
  RenderWorkCards(
    workSource.title,
    workSource.image,
    workSource.text,
    workSource.downloadLink,
    workSource.visitLink
  );
});

// wawe on click effect
const onMouseMove = (e, what) => {
  what.style.left = e.pageX - 50 + "px";
  what.style.top = e.pageY - 50 + "px";
  what.style.transition = "translate(-50%, -50%)";
};
let waveCounter = 0;
document.addEventListener("click", (e) => {
  waveCounter++;
  if (waveCounter > 4) {
    return;
  }
  const circleWave = document.createElement("div");
  const circleOne = document.createElement("div");
  const circleTwo = document.createElement("div");
  const circleThree = document.createElement("div");
  circleWave.id = "waveOnClick";
  circleOne.classList.add("circleOne");
  circleOne.classList.add("circle");
  circleTwo.classList.add("circleTwo");
  circleTwo.classList.add("circle");
  circleThree.classList.add("circleThree");
  circleThree.classList.add("circle");
  circleWave.append(circleOne, circleTwo, circleThree);
  body.append(circleWave);
  onMouseMove(e, circleWave);
  circleWave.style.animation = "circle 2.5s cubic-bezier(0, 0.2, 0.8, 1)";
  setTimeout(() => {
    circleWave.remove();
    waveCounter = 0;
  }, 2500);
});
