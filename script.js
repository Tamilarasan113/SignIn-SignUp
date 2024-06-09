const overlayPanel = document.querySelector(".overlay-container");
const swipeBtn = document.getElementById("overlay-btn");
const signIn = document.querySelector(".sign-in-section");
const signUp = document.querySelector(".sign-up-section");

swipeBtn.addEventListener("click", () => {
  if (overlayPanel.classList.contains("overlay-right")) {
    overlayPanel.classList.remove("overlay-right");
    swipeBtn.innerText = "Sign Up";
    signIn.style.opacity = 0;
    setTimeout(() => {
      signIn.style.opacity = 1;
    }, 500);
  } else {
    overlayPanel.classList.add("overlay-right");
    swipeBtn.innerText = "Sign In";
    signUp.style.opacity = 0;
    setTimeout(() => {
      signUp.style.opacity = 1;
    }, 500);
  }
});
