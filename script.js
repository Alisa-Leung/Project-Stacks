//deployment failed adding comment to push and deploy again
document.addEventListener("DOMContentLoaded", (event) => {
    const triggers = document.querySelectorAll(".modalTrigger");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".closeBtn");
    const titles = document.querySelectorAll(".title");
    
    function showModal(e) {
        modal.style.display = "flex";
        modalImg.src = e.currentTarget.src;
        captionText.innerHTML = e.currentTarget.alt;
    }

    function hideModal() {
        modal.style.display = "none";
    }

    function changeTextContent(element, newText) {
        element.textContent = newText;
    }
    
    function changeTextColor(element, newColor) {
        element.style.color = newColor;
    }
    
    titles.forEach((title) => {
        changeTextContent(title, "project stacks");
        changeTextColor(title, "black");
    });

    triggers.forEach((img) => {
        img.addEventListener("click", (e) => {
            showModal(e);
        });
    });

    closeBtn.addEventListener("click", () => {
        hideModal();
    });

    document.addEventListener("click", (event) => {
        if (event.target != modal && modal.style.display === "flex" && !event.target.classList.contains("modalTrigger")) {
            hideModal();
        }
    });
});