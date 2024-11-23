# Hangman Game 🎥🎮
- A fun and interactive Hangman Game built using HTML, CSS, and JavaScript.
- This game challenges players to guess the name of a movie from the top 50 highest-rated English movies on IMDb.
- With each incorrect guess, a stick figure is drawn step-by-step.
- Can you guess the movie before the stick figure is completed?

## Features 🌟
- **Top 50 IMDb Movie Names**: The game randomly selects a movie from a list of 50 popular and highly rated English movies.
- **Dynamic Letter Filling**: Correctly guessed letters are dynamically revealed in all their occurrences within the movie name.
- **Hint Feature**: For every three dashes (_ _ _), one letter is revealed as a hint to help the player.
- **Limited Turns**: Players get 7 turns to guess the correct movie name. Each incorrect guess reduces the number of remaining turns.
- **Visual Stick Figure**: A stick figure is progressively drawn after each wrong guess.
- **Score System**: Players earn points based on the number of turns left when they guess the movie correctly.

## How to Play 📜
- A movie name is randomly selected and displayed with underscores representing the missing letters (e.g., _ _ _ _ _ _ _ _ _ for The Godfather).
- You can guess one letter at a time by entering it in the input field.
- If the letter exists in the movie name, it will fill in all its occurrences.
- For every wrong guess:
   - The stick figure is drawn step-by-step.
   - You lose one of your seven available turns.
- Win the game by guessing the movie before the stick figure is fully drawn.
- Lose the game if the stick figure is fully drawn and the movie remains incomplete.
  
## Project Structure 📂
The project consists of three separate files:

- **HTML**: Defines the structure of the game interface.
- **CSS**: Styles the game, including the stick figure drawing and overall layout.
- **JavaScript**: Contains the game logic, random movie selection, letter validation, and scoring system.

## Technologies Used 🛠️
- **HTML5**: To structure the game interface.
- **CSS3**: To style the game, including the stick figure drawing animations.
- **JavaScript**: For game logic and interactivity.

## Future Enhancements 🚀
- Add difficulty levels with more or fewer turns.
- Include movie genres or release years as hints.
- Add a leaderboard to track high scores.
- Make the game mobile-responsive for better usability on smaller devices.
