
// Scroll-to-Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollToTopBtn";
  scrollBtn.title = "Go to top";
  scrollBtn.innerText = "↑";
  document.body.appendChild(scrollBtn);

  // Show/hide button on scroll
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // Smooth scroll to top on click
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  Object.assign(scrollBtn.style, {
    display: "none",
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: "99",
    width: "48px",
    height: "48px",
    border: "none",
    outline: "none",
    backgroundColor: "#4B2E2E",
    color: "white",
    fontSize: "24px",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0",
    lineHeight: "1",
    display: "flex",
  });

  // Style the button via JavaScript in case CSS is not present
  scrollBtn.style.display = "none";
  scrollBtn.style.position = "fixed";
  scrollBtn.style.bottom = "30px";
  scrollBtn.style.right = "30px";
  scrollBtn.style.zIndex = "99";
  scrollBtn.style.border = "none";
  scrollBtn.style.outline = "none";
  scrollBtn.style.backgroundColor = "#4B2E2E";
  scrollBtn.style.color = "white";
  scrollBtn.style.cursor = "pointer";
  scrollBtn.style.padding = "12px 16px";
  scrollBtn.style.borderRadius = "50px";
  scrollBtn.style.fontSize = "20px";
  scrollBtn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  scrollBtn.style.transition = "background-color 0.3s ease";
});
