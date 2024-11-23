const movies = [
    "THE GODFATHER", "THE DARK KNIGHT", "INCEPTION", "FIGHT CLUB",
    "FORREST GUMP", "PULP FICTION", "SCHINDLERS LIST", "STAR WARS",
    "THE LORD OF THE RINGS", "AVATAR", "TITANIC", "GLADIATOR",
    "THE SHAWSHANK REDEMPTION", "THE MATRIX", "INTERSTELLAR",
    "THE SILENCE OF THE LAMBS", "SAVING PRIVATE RYAN", "SE7EN",
    "THE USUAL SUSPECTS", "DJANGO UNCHAINED", "THE GREEN MILE",
    "THE WOLF OF WALL STREET", "BRAVEHEART", "CASABLANCA",
    "THE SOCIAL NETWORK", "GOODFELLAS", "JURASSIC PARK",
    "A BEAUTIFUL MIND", "AVENGERS ENDGAME", "IRON MAN",
    "BLACK PANTHER", "DOCTOR STRANGE", "THE LION KING",
    "TOY STORY", "COCO", "INSIDE OUT", "RATATOUILLE",
    "WALL-E", "FINDING NEMO", "UP", "MONSTERS INC",
    "SHREK", "HOW TO TRAIN YOUR DRAGON", "FROZEN",
    "THE INCREDIBLES", "ZOOTOPIA", "TANGLED", "CARS",
    "THE HUNGER GAMES", "TWILIGHT", "HARRY POTTER"
];

const maxAttempts = 7;
let attempts = 0;
let score = 0;
let selectedMovie = "";
let guessedWord = "";

const hangmanCanvas = document.getElementById("hangman");
const wordDiv = document.getElementById("word");
const lettersDiv = document.querySelector(".letters");
const scoreSpan = document.getElementById("score");
const ctx = hangmanCanvas.getContext("2d");

hangmanCanvas.width = 150;
hangmanCanvas.height = 250;

const hangmanParts = [
    () => ctx.strokeRect(50, 10, 50, 10), // Top beam
    () => ctx.strokeRect(75, 20, 1, 50), // Rope
    () => ctx.beginPath() || ctx.arc(75, 80, 10, 0, Math.PI * 2) || ctx.stroke(), // Head
    () => ctx.strokeRect(75, 90, 1, 40), // Body
    () => ctx.beginPath() || ctx.moveTo(75, 100) || ctx.lineTo(60, 120) || ctx.stroke(), // Left arm
    () => ctx.beginPath() || ctx.moveTo(75, 100) || ctx.lineTo(90, 120) || ctx.stroke(), // Right arm
    () => ctx.beginPath() || ctx.moveTo(75, 130) || ctx.lineTo(60, 160) || ctx.stroke(), // Left leg
    () => ctx.beginPath() || ctx.moveTo(75, 130) || ctx.lineTo(90, 160) || ctx.stroke(), // Right leg
];

function initGame() {
    selectedMovie = movies[Math.floor(Math.random() * movies.length)];
    guessedWord = selectedMovie.replace(/[A-Z]/g, "_");

    // Reveal a random letter for every 3 dashes
    const revealCount = Math.floor(guessedWord.replace(/_/g, "").length / 3) || 1;
    for (let i = 0; i < revealCount; i++) {
        revealRandomLetter();
    }

    attempts = 0;
    ctx.clearRect(0, 0, hangmanCanvas.width, hangmanCanvas.height);
    updateWordDisplay();
    generateLetterButtons();
}

function revealRandomLetter() {
    const unrevealedIndices = [...guessedWord]
        .map((char, i) => (char === "_" ? i : -1))
        .filter((index) => index !== -1);

    if (unrevealedIndices.length > 0) {
        const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
        guessedWord = guessedWord.substring(0, randomIndex) +
            selectedMovie[randomIndex] +
            guessedWord.substring(randomIndex + 1);
    }
}

function updateWordDisplay() {
    wordDiv.textContent = guessedWord.split("").join(" ");
}

function generateLetterButtons() {
    lettersDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {
        const button = document.createElement("div");
        button.textContent = String.fromCharCode(i);
        button.className = "letter";
        button.addEventListener("click", handleGuess);
        lettersDiv.appendChild(button);
    }
}

function handleGuess(event) {
    const letter = event.target.textContent;
    event.target.classList.add("disabled");
    event.target.removeEventListener("click", handleGuess);

    if (selectedMovie.includes(letter)) {
        let newWord = "";
        for (let i = 0; i < selectedMovie.length; i++) {
            newWord += selectedMovie[i] === letter ? letter : guessedWord[i];
        }
        guessedWord = newWord;
        updateWordDisplay();

        if (guessedWord === selectedMovie) {
            score += maxAttempts - attempts;
            scoreSpan.textContent = score;
            alert("You win! Starting a new game.");
            initGame();
        }
    } else {
        attempts++;
        hangmanParts[attempts - 1]();
        if (attempts === maxAttempts) {
            alert(`You lose! The movie was: ${selectedMovie}. Starting a new game.`);
            initGame();
        }
    }
}

initGame();
