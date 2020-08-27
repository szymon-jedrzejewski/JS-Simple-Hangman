let wordToGuess = prompt('Enter word to guess.').toUpperCase();

console.log(wordToGuess);

document.querySelector('#hangman-check-button').addEventListener('click', getGuessedLetter);
document.querySelector('#hangman-play-again-button').addEventListener('click', playAgain);

let guessedLetters = [];

console.log(guessedLetters);

let wrongAnswers = 0;

let encryptedWord = showEncryptedWord(wordToGuess);

function getGuessedLetter() {

    let guessedLetter = document.querySelector('#guessed-letter').value.toUpperCase();

    document.querySelector('#guessed-letter').value = '';

    if (guessedLetter.length === 1) {
        if (guessedLetters.includes(guessedLetter)) {
            alert('This char was alredy used!');
        } else {
            if (!wordToGuess.includes(guessedLetter) && !guessedLetters.includes(guessedLetter)) {
                wrongAnswers++;
            }
            guessedLetters.push(guessedLetter);
        }
    } else {
        alert('You should enter one char!');
    }

    showGuessedLetters();
    showHangman(wrongAnswers);

    let partlyDecryptedWord = document.querySelector('#encryptedWord').textContent;

    let partlyReplacedWord = replaceEncryptedChar(guessedLetter, partlyDecryptedWord);

    document.querySelector('#encryptedWord').textContent = partlyReplacedWord;

    if (partlyReplacedWord === wordToGuess) {
        alert('You win!')
    } else if (wrongAnswers === 10) {
        alert('You lost');
    }
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

function showEncryptedWord(wordToGuess) {
    let encryptedWord = '';
    for (let i = 0; i < wordToGuess.length; i++) {
        encryptedWord += '*';
    }
    document.querySelector('#encryptedWord').textContent = encryptedWord;
    return encryptedWord;
}

function replaceEncryptedChar(guessedLetter, encryptedWord) {
    let partlyDecryptedWord = encryptedWord.split('');
    if (wordToGuess.includes(guessedLetter)) {
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guessedLetter) {
                partlyDecryptedWord[i] = guessedLetter;
            }
        }
    }
    return partlyDecryptedWord.join('');
}

function playAgain() {
    location.reload();
}