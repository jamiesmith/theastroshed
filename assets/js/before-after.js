// /assets/js/before-after.js
function initComparisons() {
  const containers = document.querySelectorAll(".img-comp-container");
  containers.forEach(setupComparison);
}

function setupComparison(container) {
  if (!container || container.dataset.compInitialized === "1") return;
  container.dataset.compInitialized = "1";

  const overlay = container.querySelector(".img-comp-img.img-comp-overlay");
  if (!overlay) return; // nothing to do

  // Make sure the overlay sits on top of the base image
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.height = "100%";

  // Base dimensions from the container (not the overlay)
  const w = container.clientWidth;
  const h = container.clientHeight;

  // Default starting position = 50%
  setOverlayWidth(w / 2);

  // Create the slider handle
  const slider = document.createElement("div");
  slider.className = "img-comp-slider";
  container.appendChild(slider);

  // Position the slider in the middle
  positionSlider(w / 2);

  // Pointer handling (mouse + touch unified)
  let dragging = false;

  slider.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    dragging = true;
    slider.setPointerCapture(e.pointerId);
  });

  slider.addEventListener("pointerup", (e) => {
    dragging = false;
    slider.releasePointerCapture(e.pointerId);
  });

  slider.addEventListener("pointercancel", () => (dragging = false));

  // Move only within THIS container
  container.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left; // x relative to container
    if (x < 0) x = 0;
    if (x > w) x = w;
    setOverlayWidth(x);
    positionSlider(x);
  });

  // Also allow clicking anywhere on the container to jump slider
  container.addEventListener("pointerdown", (e) => {
    if (e.target === slider) return; // already handled
    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > w) x = w;
    setOverlayWidth(x);
    positionSlider(x);
  });

  function setOverlayWidth(x) {
    overlay.style.width = x + "px";
  }

  function positionSlider(x) {
    // center the handle vertically, position horizontally at the split
    slider.style.top = (h / 2 - slider.offsetHeight / 2) + "px";
    slider.style.left = (x - slider.offsetWidth / 2) + "px";
  }
}
