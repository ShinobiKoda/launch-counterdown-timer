const flipCard = document.querySelector(".flip-card");

// Calculate last moment of the current month
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
const countToDate = new Date(lastDayOfMonth.setHours(23, 59, 59, 999));




setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);

  flipAllCards(timeBetweenDates);
}, 250);

const flipAllCards = (time) => {
  const days = Math.floor(time / 86400);
  const hrs = Math.floor(time / 3600) % 24;
  const min = Math.floor(time / 60) % 60;
  const sec = Math.floor(time % 60);

  flip(document.querySelector("[data-day-tens]"), Math.floor(days / 10));
  flip(document.querySelector("[data-day-ones]"), days % 10);
  flip(document.querySelector("[data-hour-tens]"), Math.floor(hrs / 10));
  flip(document.querySelector("[data-hour-ones]"), hrs % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(min / 10));
  flip(document.querySelector("[data-minutes-ones]"), min % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(sec / 10));
  flip(document.querySelector("[data-seconds-ones]"), sec % 10);
};



const flip = (flipCard, newNumber) => {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  const initial = parseInt(topHalf.textContent);

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
};

flip(flipCard);


