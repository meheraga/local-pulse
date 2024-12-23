// Mobile navigation script can be added here if needed
console.log("Local Pulse Website loaded successfully");


const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const shapeContainer = document.createElement('div');
    shapeContainer.classList.add('shape-container');
    body.appendChild(shapeContainer);

    function createShape(x, y) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        shape.style.left = `${x}px`;
        shape.style.top = `${y}px`;
        shapeContainer.appendChild(shape);

        setTimeout(() => {
            shape.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${Math.random() * 2})`;
        }, 50);

        setTimeout(() => {
            shape.remove();
        }, 1000);
    }

    body.addEventListener('mousemove', (e) => {
        createShape(e.clientX, e.clientY);
    });
});



document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value;
    alert(`Searching for: ${query}`);
});


document.addEventListener("DOMContentLoaded", () => {
    const profileIcon = document.getElementById("profileIcon");
    const profileFlashcard = document.getElementById("profileFlashcard");

    profileIcon.addEventListener("click", () => {
        profileFlashcard.style.display = profileFlashcard.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
        if (!profileIcon.contains(event.target) && !profileFlashcard.contains(event.target)) {
            profileFlashcard.style.display = "none";
        }
    });
});



