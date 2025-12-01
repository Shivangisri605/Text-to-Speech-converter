const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

// Change made: The class in HTML/CSS was updated to 'error-message', 
// so the selector in JS is updated for consistency, though '.error-para' 
// would still work if that was the class used.
const error = document.querySelector('.error-message'); 

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        // Use the professional error-message class for the selector
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter =
            new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        
        // Update button text to reflect the professional theme
        convertBtn.textContent = "🔊 Playing Audio..."
    }
    
    // Set a timeout to reset the button text. The duration might need adjustment 
    // depending on the length of the speech. 5 seconds is a decent placeholder.
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
});