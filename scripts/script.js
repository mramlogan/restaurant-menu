// countdown starting at 5 minutes (300 seconds)

document.addEventListener("DOMContentLoaded", () => {
  const promoEl = document.getElementById("promo");
  if (!promoEl) return;

  let remaining = 5 * 60; // seconds

  function updateTimer() {
    if (remaining < 0) {
      promoEl.textContent = "Promotion ended.";
      clearInterval(intervalId);
      return;
    }

    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    promoEl.textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, "0")} `;
    remaining -= 1;
  }

  // initialise and start interval
  updateTimer();
  const intervalId = setInterval(updateTimer, 1000);
});