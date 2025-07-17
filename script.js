function checkLogin() {
  const correctNickname = "sunflower";  // change to your nickname
  const correctPassword = "070125";      // change to your password

  const nicknameInput = document.getElementById("nickname").value.trim();
  const passwordInput = document.getElementById("password").value;

  const errorElem = document.getElementById("error");
  const loginBox = document.getElementById("loginBox");
  const content = document.getElementById("content");

  if (nicknameInput === correctNickname && passwordInput === correctPassword) {
    // Hide login form
    loginBox.style.display = "none";

    // Show secret content
    content.style.display = "block";

    errorElem.textContent = "";
  } else {
    errorElem.textContent = "Oops! Wrong nickname or password. Try again ❤️";
  }
}
