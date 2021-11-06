console.log("git Testing2")
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
    try{
        const speech = new SpeechSynthesisUtterance();
    
        if(message.includes('how are you')){
            speech.text = "Im good, baby"
        }else if(message.includes('tell me a joke')){
            speech.text = "You are a joke"
        }
        else if(message.includes('tell me joke')){
            speech.text = "this is another joke"
        }
        speech.volume = 1        
        speech.rate = 1
        speech.pitch = 1
        window.speechSynthesis.speak(speech)
    }catch(error){
        alert(error)
        console.textContent = error
    }
}