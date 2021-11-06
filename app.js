
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
    speakIt(transcript)
}

// Add listener to button
button.addEventListener('click', ()=>{
    recognition.start()
})

const speakIt = (message) =>{
    const speech = new SpeechSynthesisUtterance();
    speech.text = message
    speech.volume = 1        
    speech.rate = 1
    speech.pitch = 1
}