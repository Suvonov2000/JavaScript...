var h1 = document.createElement("h1");
h1.textContent = "Konichiva";

setTimeout(() => {
  document.querySelector(".main").remove();
  document.body.appendChild(h1);
}, 5000);
