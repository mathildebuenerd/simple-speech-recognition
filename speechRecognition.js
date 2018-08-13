// ------------------------------------
//      Variables you can change
// ------------------------------------

const language = "fr-FR";
const interimResults = false; // ne montre pas les résultats intermédiaires mais du coup prend plus de temps à afficher le résultat final

const findWords = true;
const wordsToFind = ["enchanté", "mon", "ami", /\*/];

// --------------------------

let speechToTextTag = document.querySelector(`#speech`);


window.addEventListener("load", () => {

    if ('webkitSpeechRecognition' in window) {

        const recognition = new webkitSpeechRecognition();
        recognition.lang = language;
        recognition.continuous = true;
        recognition.interimResults = interimResults;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onstart = () => {};

        // permet de redémarrer la recognition quand elle s'arrête
        recognition.onend = () => {
            console.log(`recognition stopped`);
            recognition.stop();
            console.log(`recognition started again`);
            recognition.start();
        };

        recognition.onresult = (event) => {

            let last = event.results.length - 1;
            let sentence = event.results[last][0].transcript;
            console.log(sentence);
            speechToTextTag.textContent += sentence;

            // If you want to identify specific words
            if (findWords) {
                for (let i=0; i<wordsToFind.length; i++) {
                    let word = new RegExp(wordsToFind[i], "gi"); // we use a regex for managing cqse
                    let currentWord = "";

                    if ((currentWord = word.exec(sentence)) !== null) {
                        recognition.wordFound(currentWord);
                    }
                }
            }
        };

        recognition.wordFound = (data) => {
          console.log(`Word found: ${data}`);
        }
    }

});
