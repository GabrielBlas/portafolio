document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const processButton = document.getElementById("processButton");
    const resultArea = document.getElementById("resultArea");
    
    processButton.addEventListener("click", function() {
        const text = inputText.value;
        const option = document.querySelector('input[name="option"]:checked').value;

        if (option === "encrypt") {
            resultArea.value = encryptText(text);
        } else if (option === "decrypt") {
            resultArea.value = decryptText(text);
        }
    });
});

function encryptText(text) {
    const encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(encryptedText) {
    const decryptedText = encryptedText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return decryptedText;
}
