const flipCard = document.querySelector('.flip-card');


const flip = (flipCard) => {
  const topHalf = flipCard.querySelector(".top");
  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  const initial = parseInt(topHalf.textContent)

  topHalf.textContent = initial;
  bottomHalf.textContent = initial;
  topFlip.textContent = initial;
  bottomFlip.textContent = initial - 1;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = initial - 1;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = initial - 1;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
}

flip(flipCard);
