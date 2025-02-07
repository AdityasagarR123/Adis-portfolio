document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Function to check visibility of elements on scroll
function checkVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return; // Prevent errors if element doesn't exist

    const elementPosition = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (elementPosition < screenHeight - 100) {
        element.classList.add("visible");
    } else {
        element.classList.remove("visible");
    }
}

// Apply scroll visibility effect to elements
window.addEventListener("scroll", () => {
    checkVisibility("ac");
    checkVisibility("adi");
});

// Run once when the page loads
checkVisibility("ac");
checkVisibility("adi");

// Toggle visibility of multiple elements on button click
document.getElementById("work").addEventListener("click", function () {
    const panels = ["rightpanel", "leftpanel", "middle", "tubtub", "this"];
    
    panels.forEach(panelId => {
        const element = document.getElementById(panelId);
        if (!element) return;

        // Toggle visibility
        if (element.classList.contains("hidden")) {
            element.classList.remove("hidden");
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
            element.classList.add("hidden");
        }
    });
});
