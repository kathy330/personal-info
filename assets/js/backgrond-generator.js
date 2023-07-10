const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const degree = document.querySelector("#degree");

const cssCodeGenerator = function () {
  const css = document.querySelector("h3");
  const body = document.getElementById("gradient");
  body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
  css.textContent = `${body.style.background};`;
};

const setGradient = function () {
  cssCodeGenerator();
};

const getRandomColor = function () {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
};

const generateRandomColor = document.getElementById("generateRandomColor");
generateRandomColor.addEventListener("click", function () {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  cssCodeGenerator();
});

// initial css when the page load
cssCodeGenerator();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
degree.addEventListener("input", setGradient);
