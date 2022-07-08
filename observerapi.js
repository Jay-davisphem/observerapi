// Full page
const articles = document.querySelectorAll(".sm_body");
// Header scroll
const header = document.querySelector("header");
const secOne = document.querySelector(".sm_body h1");

// Full page
function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("onit");
      //observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("onit");
      return;
    }
  });
}

const options = {
  root: null,
  threshold: 0.25,
  rootMargin: "-20%",
};
const observer = new IntersectionObserver(callback, options);

articles.forEach((article) => {
  observer.observe(article);
});

// Header scroll
const secOneOpt = {
  rootMargin: "-10%",
};
const secOneObserver = new IntersectionObserver((entries, secOneObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
}, secOneOpt);

secOneObserver.observe(secOne);

const ol = document.querySelector("nav ol");

function callme() {
  console.log("god of abraham");
}

ol.onclick = callme();
