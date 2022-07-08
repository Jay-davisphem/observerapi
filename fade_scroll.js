const faders = document.querySelectorAll(".fade_in");
const sliders = document.querySelectorAll(".from_right");

const appearOptions = {
  thresshold: 0,
  rootMargin: "0px 0px -200px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    console.log(entry.target.classList);
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));
sliders.forEach((slider) => appearOnScroll.observe(slider));
