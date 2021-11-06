
const button = document.querySelector('.talk') 
const content = document.querySelector('.content')
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("Voice is activated")
}
recognition.onresult = function (event){
    const currentText = event.resultIndex

    const transcript = event.results[currentText][0].transcript
    content.textContent = transcript
}

// Add listener to button
button.addEventListener('click', ()=>{
    recognition.start()
})