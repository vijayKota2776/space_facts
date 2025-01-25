// Selectors
const factButton = document.getElementById("getFact");
const factDisplay = document.getElementById("factDisplay");

// Array of Space Facts
const spaceFacts = [
    "The largest volcano in the solar system is on Mars.",
    "A day on Venus is longer than a year on Venus.",
    "The sun's core temperature is around 15 million degrees Celsius.",
    "Jupiter has 79 moons that we know of.",
    "One million Earths could fit inside the sun.",
    "The Milky Way galaxy will collide with the Andromeda galaxy in about 4.5 billion years.",
    "A neutron star can spin at a rate of 600 rotations per second.",
    "Saturn’s rings are made mostly of ice and rock particles."
];

// Function to get a random fact
function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    factDisplay.textContent = spaceFacts[randomIndex];
}

// Add event listener to the button
if (factButton) {
    factButton.addEventListener("click", displayRandomFact);
}