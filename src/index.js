const toggleVisibility = (item) =>
  !item.style.display || item.style.display === "none"
    ? (item.style.display = "block")
    : (item.style.display = "none");

const navWrapper = document.getElementById("nav-wrapper");
navWrapper.addEventListener("click", (event) => {
  if (event.target.tagName == "H2") {
    const parent = event.target.parentNode;
    const children = parent.querySelectorAll(".subitem");
    children.forEach((child) => toggleVisibility(child));
  }
});
