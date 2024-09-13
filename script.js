// script.js
document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector('.animated-text');
    const textArray = ['I am a passionate developer.', 'I build awesome web apps.', 'Let\'s create something great together!'];
    let textIndex = 0;

    function typeText() {
        if (textIndex < textArray.length) {
            text.innerHTML = textArray[textIndex];
            textIndex++;
        } else {
            textIndex = 0;
        }
    }

    setInterval(typeText, 3000);
});
