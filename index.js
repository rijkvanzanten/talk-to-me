const input = document.querySelector('input');

const endCharacters = ['.', '!', '?'];

let timeout;

input.addEventListener('keyup', ({ key }) => {
    clearTimeout(timeout);

    if (endCharacters.includes(key) || key === 'Enter') {
        speak(input.value);
        input.value = '';
    } else {
        // After 500ms of not typing, consider it a sentence too
        timeout = setTimeout(() => {
            speak(input.value);
            input.value = '';
        }, 500);
    }
});

function speak(word) {
    console.log(`Utter: "${word}"`);
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
}