# Guess My Number

A small, browser-based number guessing game built with plain HTML, CSS and JavaScript.

## Demo
Open `index.html` in your browser to play locally:
- [index.html](index.html)
- the link for it: 


## How to play
1. The game picks a secret number between 1 and 100.
2. Enter your guess in the input and click the "Check" (or "Guess") button.
3. The game will tell you whether your guess is too high, too low, or correct.
4. Your score decreases with each wrong guess. Try to beat the high score!
5. Click "Again" (or "Play Again") to reset the game and start over.

## Features
- Random secret number each round (1–100).
- Feedback: "Too high", "Too low", "Correct!" messages.
- Score tracking for the current round.
- High score saved in `localStorage`.
- Responsive and simple UI (no frameworks required).

## Files
- `index.html` — main HTML markup and UI.
- `style.css` — styles for layout and visual design.
- `script.js` — game logic (random number generation, input handling, scoring).
- `.prettierrc` — formatting configuration.

## Development notes
- Main game behavior lives in `script.js`. If you want to:
  - Change the range, look for the secret-number generation logic.
  - Modify scoring or messages, edit the corresponding functions and DOM updates.
- High score is stored in `localStorage` under a simple key — clearing browser storage will reset it.

## Author
[Haneen Abdelhaleem]: https://www.linkedin.com/in/haneen-abdulhaleem20306/ | haneen.abdelhaleem11@gmail.com
