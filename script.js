const ideas =[
    "Personalized mug",
    "Customized jewelry",
    "Gourmet chocolate set",
    "Outdoor adventure experience",
    "Subscription to a streaming service",
];

const randomGen = document.getElementById("randomGenButton");
const ideaDisplay = document.getElementById("ideaDisplay");

function showRandomGiftIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const randomIdea = ideas[randomIndex];
    ideaDisplay.textContent = randomIdea;
}

randomGen.addEventListener("click",showRandomGiftIdea);