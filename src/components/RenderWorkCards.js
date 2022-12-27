import Modal from "./Modal";
const body = document.body;

export const RenderWorkCards = (
  title,
  imageSrc,
  text,
  downloadLink,
  visitLink
) => {
  const divSwiperSlide = document.createElement("div");
  divSwiperSlide.classList.add("swiper-slide");
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  const divOpis = document.createElement("div");
  divOpis.classList.add("opis");
  divOpis.innerHTML = `<h3>${title}</h3>`;
  const divCardImg = document.createElement("div");
  divCardImg.classList.add("card-image");
  divCardImg.innerHTML = `<img src="${imageSrc}" alt="image of ${title}">`;

  divCard.addEventListener("click", (e) => {
    body.append(Modal(title, text, downloadLink, visitLink));
  });

  divCard.append(divOpis, divCardImg);
  divSwiperSlide.append(divCard);
  document.querySelector(".swiper-wrapper").append(divSwiperSlide);
};
