const input = document.querySelector('input');

const endCharacters = ['.', '!', '?'];

let timeout;

input.addEventListener('keyup', ({ key }) => {
    if (endCharacters.includes(key) || key === 'Enter') {
        speak(input.value);
        input.value = '';
    }
});

function speak(word) {
    console.log(`Utter: "${word}"`);
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
}