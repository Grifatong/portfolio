const Modal = (
  title = "title",
  text = "text",
  downloadLink = "#",
  visitLink = "#"
) => {
  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modalBackground");
  const modalMain = document.createElement("div");
  modalMain.classList.add("modalMain");
  const modalTitle = document.createElement("h3");
  modalTitle.innerText = title;
  const modalClose = document.createElement("div");
  modalClose.classList.add("modalClose");
  modalClose.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
  const modalText = document.createElement("p");
  modalText.innerText = text;
  const downloadBtn = document.createElement("button");
  downloadBtn.classList.add("modalDownloadBtn");
  downloadBtn.innerHTML = `<a href="${downloadLink}" >download <ion-icon name="download-outline"></ion-icon></a> `;
  const visitBtn = document.createElement("button");
  visitBtn.classList.add("modalDownloadBtn");
  visitBtn.innerHTML = `<a href="${visitLink}" target="_blank">Go to <ion-icon name="exit-outline"></ion-icon> `;
  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modalFooter");
  modalFooter.append(downloadBtn, visitBtn);

  window.onclick = function (event) {
    if (event.target === modalBackground) {
      modalMain.style.animation = "hideModal 0.7s";
      modalBackground.style.opacity = "0";
      setTimeout(() => {
        modalBackground.remove();
      }, 700);
    }
  };
  modalClose.addEventListener("click", (close) => {
    modalMain.style.animation = "hideModal 0.7s";
    modalBackground.style.opacity = "0";
    setTimeout(() => {
      modalBackground.remove();
    }, 700);
  });

  modalMain.append(modalTitle, modalClose, modalText, modalFooter);
  modalBackground.append(modalMain);

  return modalBackground;
};
export default Modal;
