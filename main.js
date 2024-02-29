// 1 Calculator
// function calculator() {
//     let num1 = parseFloat(prompt("Enter number 1:"));
//     let num2 = parseFloat(prompt("Enter number 2:"));

//     let calculations = prompt("Choose an operator (+, -, *, /):");

//     let result;

//     if (calculations === '+') {
//         result = num1 + num2;
//     } else if (calculations === '-') {
//         result = num1 - num2;
//     } else if (calculations === '*') {
//         result = num1 * num2;
//     } else if (calculations === '/') {
//         if (num2 === 0) {
//             console.log("Division by zero.");
//             return;
//         }
//         result = num1 / num2;
//     } else {
//         console.log("Error");
//         return;
//     }

//     console.log("Result:", result);
// }

// calculator();


// 2 Guess the number
// function guessTheNumber() {
//     const minRange = 1;
//     const maxRange = 100;

//     const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;

//     let attempts;

//     for (attempts = 1; ; attempts++) {
//         let guess = parseInt(prompt(`Guess the number between ${minRange} and ${maxRange}:`));

//         if (guess === randomNumber) {
//             console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts}.`);
//             break;
//         } else {
//             console.log(`Try again. The number is ${guess < randomNumber ? 'higher' : 'lower'}.`);
//         }
//     }
// }

// guessTheNumber();




// 3 Hangman
// function hangman() {
//     const words = ["galaxy", "space", "earth", "mars", "mercury", "jupiter", "uran"];
//     const selectedWord = words[Math.floor(Math.random() * words.length)];
//     let hiddenWord = "_".repeat(selectedWord.length);
//     let tries = 6;

//     console.log("Welcome to Hangman!");
//     console.log("Word:", hiddenWord);

//     while (tries > 0 && hiddenWord !== selectedWord) {
//         let guess = prompt(`Guess a letter (${tries} tries left):`).toLowerCase();
//         if (guess.length !== 1 || !isLowercaseLetter(guess)) {
//             console.log("Invalid input. Please enter a single lowercase letter.");
//             continue;
//         }
//         if (selectedWord.includes(guess)) {
//             hiddenWord = revealLetters(selectedWord, hiddenWord, guess);
//             console.log("Correct guess!");
//         } else {
//             console.log("Incorrect guess!");
//             tries--;
//         }
//         console.log("Word:", hiddenWord);
//     }

//     if (hiddenWord === selectedWord) {
//         console.log("Congratulations! You guessed the word:", selectedWord);
//     } else {
//         console.log("Sorry, you've run out of tries. The word was:", selectedWord);
//     }
// }

// function isLowercaseLetter(str) {
//     return str >= 'a' && str <= 'z';
// }

// function revealLetters(word, hiddenWord, letter) {
//     let newHiddenWord = '';
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             newHiddenWord += letter;
//         } else {
//             newHiddenWord += hiddenWord[i];
//         }
//     }
//     return newHiddenWord;
// }

// hangman();


// 4 Translator
// function translator() {
//     const dictionary = [
//         ["apple", "ვაშლი"],
//         ["banana", "ბანანი"],
//         ["cherry", "ალუბალი"],

//     ];

//     const languagePairs = ["English-Georgian", "Georgian-English"];

//     let languagePair = prompt("Choose a language pair:\n1. English-Georgian\n2. Georgian-English");
//     if (languagePair !== "1" && languagePair !== "2") {
//         console.log("Invalid choice. Please choose a valid language pair.");
//         return;
//     }

//     languagePair = parseInt(languagePair) - 1;

//     let input = prompt("Enter a word or short phrase:");
//     if (!input) {
//         console.log("No input provided.");
//         return;
//     }

//     if (languagePair === 0) {
//         let translation = findTranslation(dictionary, input);
//         if (translation) {
//             console.log(`Translation: ${translation}`);
//         } else {
//             console.log("Translation not found in the dictionary.");
//             let newTranslation = prompt("Enter the translation:");
//             if (!newTranslation) {
//                 console.log("No translation provided. Exiting.");
//                 return;
//             }
//             dictionary.push([input, newTranslation]);
//             console.log("Translation added to the dictionary.");
//         }
//     } else { 
//         let reversedDictionary = dictionary.map(entry => [entry[1], entry[0]]);
//         let translation = findTranslation(reversedDictionary, input);
//         if (translation) {
//             console.log(`Translation: ${translation}`);
//         } else {
//             console.log("Translation not found in the dictionary.");
//             let newTranslation = prompt("Enter the translation:");
//             if (!newTranslation) {
//                 console.log("No translation provided. Exiting.");
//                 return;
//             }
//             dictionary.push([newTranslation, input]);
//             console.log("Translation added to the dictionary.");
//         }
//     }
// }

// function findTranslation(dictionary, word) {
//     for (let entry of dictionary) {
//         if (entry[0] === word) {
//             return entry[1];
//         }
//     }
//     return null;
// }

// translator();

