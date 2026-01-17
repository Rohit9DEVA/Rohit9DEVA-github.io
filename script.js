// Typing effect
const words = ["Telecom Professional", "Full-Stack Developer", "Creator of Fake GPT"];
let i = 0, j = 0, current = "", isDeleting = false;
const typing = document.getElementById("typing");

function type() {
  if (!isDeleting && j <= words[i].length) {
    current = words[i].slice(0, ++j);
  } else if (isDeleting && j >= 0) {
    current = words[i].slice(0, --j);
  }

  typing.textContent = current;

  if (j === words[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(type, 120);
}
type();

// Fade on scroll
const items = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
});
items.forEach(i=>observer.observe(i));
