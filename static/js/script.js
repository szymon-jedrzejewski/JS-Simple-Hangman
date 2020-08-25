let wordToGuess = prompt('Enter word to guess.');

console.log(wordToGuess);

document.querySelector('#hangman-check-button').addEventListener('click', getGuessedLetter);

let guessedLetters = [];

console.log(guessedLetters);

let wrongAnswers = 0;

function getGuessedLetter() {

    let guessedLetter = document.querySelector('#guessed-letter').value;

    document.querySelector('#guessed-letter').value = '';

    if (guessedLetter.length === 1) {
        if (guessedLetters.includes(guessedLetter)) {
            alert('This char was alredy used!');
        } else {
            if (!isLetterInWord(guessedLetter) && !guessedLetters.includes(guessedLetter)) {
                wrongAnswers++;
            }
            guessedLetters.push(guessedLetter);
        }
    } else {
        alert('You should enter one char!');
    }

    showGuessedLetters();
    showHangman(wrongAnswers);
}

function showGuessedLetters() {
    let letters = '';
    for (let i = 0; i < guessedLetters.length; i++) {
        letters += ' ' + guessedLetters[i];
    }
    document.querySelector('#letters').textContent = letters;
}

function showHangman(numberOfIncorrectAnswers) {
    document.querySelector('#hangman').src = `static/images/${numberOfIncorrectAnswers}.png`;
}

function isLetterInWord(guessedChar) {
    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess.charAt(i) === guessedChar) {
            return true;
        }
    }
    return false;
}

function wasLetterUsed(guessedLetter) {
    for (let i = 0; i < guessedLetters.length; i++) {
        if (guessedLetters[i] === guessedLetter) {
            return true;
        }
    }
    return false;
}

function showEncryptedWord() {

}