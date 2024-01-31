// BrowserCheats | StriveMath MyWordle Solver.
const keyFilter = Array.from(document.querySelectorAll("[class*='flex items-center justify-center rounded mx-0.5 text-s font-bold cursor-pointer']"));
const keyboardKeys = {};
let key = "WORDLE";

// Get all keyboard keys.
keyFilter.forEach(key => {
    // Get the contents of the key.
    let keyContents = key.textContent.trim();

    // Add the key to the array.
    keyboardKeys[keyContents] = key;
})

// Press a single key on the keyboard.
const pressKey = (key) => {
    // Check if the key is in keyboardKeys.
    if (keyboardKeys[key]) {
        // Press the key.
        keyboardKeys[key].click();
    }
}

// Search the url for the encoded word.
const currentUrl = new URL(window.location.href);
const word = currentUrl.searchParams.get("word");

// Decoding variables.
let decodedWord = "";
let keyIndex = 0;

// Decode the encoded word.
if (word && word.trim() !== "") {
    // Make the word uppercase.
    const wordUpperCase = word.toUpperCase();

    // Loop through all of the characters and decode.
    for (let i = 0; i < wordUpperCase.length; i++) {
        // Get a single character.
        const character = wordUpperCase[i];

        // Test the character and decode it.
        if (/[A-Z]/.test(character)) {
            // Use the key to help decode the character.
            const keyCharacter = key[keyIndex % key.length];

            // The dedcoded character code.
            const decodedCharacterCode = (character.charCodeAt(0) - keyCharacter.charCodeAt(0) + 26) % 26;

            // The decoded character.
            const decodedCharacter = String.fromCharCode(decodedCharacterCode + "A".charCodeAt(0))

            // Add the decoded character to the decoded word.
            decodedWord += decodedCharacter;

            // Increase the keyIndex.
            keyIndex++;
        } else {
            wordDecoded += character;
        }
    }
}

// Solve the wordle with delays.
const solveWordle = (word, index) => {
    // If the index isn't at the length of the word.
    if (index < word.length) {
        // Get a letter.
        let letter = word[index];

        // Press the corrisponding key.
        pressKey(letter);

        // Use setTimeout to loop again with delay.
        setTimeout(() => {
            // Run solveWordle again to type the next letter.
            solveWordle(word, index + 1);
        })
    }
    // If the index is at the length of the word.
    else if (index === word.length) {
        // Use setTimeout to press the enter key with delay.
        setTimeout(() => {
            // Press the enter key
            pressKey("Enter");
        })
    }
}

// Solve the wordle.
solveWordle(decodedWord, 0);