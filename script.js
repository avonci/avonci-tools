const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card"); // Select all cards in both grids

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            // Using "" allows it to revert to the default CSS (grid/flex)
            card.style.display = ""; 
        } else {
            card.style.display = "none";
        }
    });

    // OPTIONAL: Hide headings if no cards are visible in that section
    toggleHeadings();
});

function toggleHeadings() {
    const sections = ['toolsGrid', 'gamesGrid'];
    sections.forEach(id => {
        const grid = document.getElementById(id);
        const heading = grid.previousElementSibling; // Grabs the <h2> above the grid
        const hasVisibleCards = Array.from(grid.children).some(card => card.style.display !== "none");
        
        if (heading && heading.tagName === "H2") {
            heading.style.display = hasVisibleCards ? "" : "none";
        }
    });
}
