function convert() {
    let input = document.getElementById("inputtext").value;
    if (input.trim() === "") {
        alert("Enter Text First");
        return;
    }

    let speech = new SpeechSynthesisUtterance();
    speech.text = input;
    speech.lang = "en-US"; 
    speech.rate = 1; 
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}
