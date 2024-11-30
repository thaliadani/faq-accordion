const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const paragraph = button.parentElement.nextElementSibling;

        button.parentElement.classList.toggle("active");

        if (button.parentElement.classList.contains("active")) {
            button.children[0].src = "./assets/imgs/icon-minus.svg";
            paragraph.style.display = "block";
        } else {
            button.children[0].src = "./assets/imgs/icon-plus.svg";
            paragraph.style.display = "none";
        }
    });
});