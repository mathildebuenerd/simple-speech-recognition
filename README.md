# Simple Speech Recognition

## Description
Simple speech recognition using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

## How to use it
- Change the language to be detected (default: French, "fr") and other variables at the top of the `speechRecognition.js`
 file. This variable has to be a string representing a BCP 47 language tag (more infos on the [Web Speech API docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang)).
    - [Indicative list of language tags](https://www.w3schools.com/tags/ref_language_codes.asp) (not all languages are supported)
    - In case you change it, you may also want to change it in the `html` tag.
- Open Chrome Browser, allow usage of microphone
- Results are going to be displayed in the console and in a paragraph.

## How to detect specific words
- Change the `wordsToFind` variable at the top of the `speechRecognition.js`.
- Then do whatever you want in the `recognition.wordFound` function.

## Requirements
- Works only with Google Chrome
