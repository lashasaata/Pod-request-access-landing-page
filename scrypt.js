const input = document.getElementById("input");
const button = document.getElementById("button");
const p = document.getElementById("error");

// sets opacity on input if it exict, checks and logs error
let inputValue = "";
input.addEventListener("input", (event) => {
  inputValue = event.target.value;
  if (inputValue.length > 0) {
    input.style.opacity = "1";
  } else {
    input.style.opacity = "0.5";
  }
});
function requestAccess() {
  if (inputValue.length > 0) {
    p.style.display = "block";
  }
}
