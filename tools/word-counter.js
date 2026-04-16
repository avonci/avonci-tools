const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const readingTimeDisplay = document.getElementById('readingTime');

textInput.addEventListener('input', () => {
    const text = textInput.value.trim();
    
    // Character Count (including spaces)
    const chars = text.length;
    
    // Word Count - Split by whitespace and filter out empty strings
    const words = text ? text.split(/\s+/).length : 0;
    
    // Reading Time - Average person reads ~200 words per minute
    const minutes = Math.ceil(words / 200);
    
    // Update UI
    wordCountDisplay.innerText = words;
    charCountDisplay.innerText = chars;
    readingTimeDisplay.innerText = minutes + "m";
});

function clearText() {
    textInput.value = '';
    wordCountDisplay.innerText = '0';
    charCountDisplay.innerText = '0';
    readingTimeDisplay.innerText = '0m';
}
