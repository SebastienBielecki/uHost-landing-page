const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan .button");
const selectModalNoButton = document.querySelector(".modal button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");


selectPlanButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("open");
        backdrop.classList.add("open");

    })
})

backdrop.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    closeModal();
})

if (selectModalNoButton) {
    selectModalNoButton.addEventListener("click", closeModal);
}


function closeModal() {
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

toggleButton.addEventListener("click", () => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
})
