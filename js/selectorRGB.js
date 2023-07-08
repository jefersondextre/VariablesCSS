const red = document.getElementById('red');
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const rootStyles = document.documentElement.style;

const changeColorRed = e =>{
  // console.log(e.target.value)
  rootStyles.setProperty("--red", e.target.value);
}
const changeColorGreen = (e) => {
  // console.log(e.target.value)
  rootStyles.setProperty("--green", e.target.value);
};
const changeColorBlue = (e) => {
  // console.log(e.target.value)
  rootStyles.setProperty("--blue", e.target.value);
};

red.addEventListener('change',e => {
  changeColorRed(e)
})
red.addEventListener('mousemove',e => {
  changeColorRed(e)
})

green.addEventListener("change", (e) => {
  changeColorGreen(e);
});
green.addEventListener("mousemove", (e) => {
  changeColorGreen(e);
});

blue.addEventListener("change", (e) => {
  changeColorBlue(e);
});
blue.addEventListener("mousemove", (e) => {
  changeColorBlue(e);
});

