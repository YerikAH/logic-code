const $footer = document.getElementById("footer");
const $hero = document.getElementById("hero");
document.addEventListener("scroll", () => {
  const heightHero = $hero.clientHeight;
  const scrollPositionY = window.scrollY;
  const skipHero = scrollPositionY - heightHero;
  console.log(skipHero);
  if (skipHero > 0) {
    $footer.style.visibility = "visible";
    $footer.style.opacity = "1";
  } else {
    $footer.style.visibility = "hidden";
    $footer.style.opacity = "0";
  }
});
