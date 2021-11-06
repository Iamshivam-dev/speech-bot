const button = document.querySelector('.talk') //Talk button 
const myDialog = document.querySelector('.my-dialog') //h3 tag where user speech is shown
const botDialog = document.querySelector('.bot-dialog') //h3 tag where bot speech is shown
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

//Jokes array to give random joke 
const jokes= ['Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem','There are only 10 kinds of people in this world: those who know binary and those who don’t.','Real programmers count from 0.', 'Why did the programmer quit his job? Because he didnt get arrays.', 'A foo walks into a bar takes a look around and says Hello World','0 is false 1 is true right? 1','Things arent always #000000 and #FFFFFF.','What is the most used language in programming? Profanity','!False its funny because its True','You had me at Hello World','2b||!2b','Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted','A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand','How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.','I would love to change the world but they wont give me the source code.','If at first you dont succedd call it version 1.0','Computers make very fast very accurate mistakes','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.','Knock Knock... Whos there? Art... Art Who? R2D2','Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.']

// when recoginion starts, change button text 
recognition.onstart = function () {
    console.log("Voice is activated")
    button.textContent = "Listening"

}
// When recognition ends
recognition.onresult = function (event){
    button.textContent = "Result.."
    const currentText = event.resultIndex //getting the speech index give by user
    const transcript = event.results[currentText][0].transcript //getting the text which user said
    myDialog.textContent = transcript

    //Speaking out the resutlt, then changing botDialong 
    speakIt(transcript).then((text_to_speak)=>{
        botDialog.textContent = text_to_speak        
    })
    button.textContent = "Talk"
}

// When talk button is clicked, start recogniton
button.addEventListener('click', ()=>{
    recognition.start()
})

// Speech function, takes message give my user
const speakIt = async (message) =>{
    try{
        const speech = new SpeechSynthesisUtterance();
        // Message comparisons
        if(message.includes('how are you')){
            reply = ["I am good", "I am fine", "Awesome!"]
            text_to_speak =reply[Math.floor(Math.random() * jokes.length)]

        }else if(message.includes('tell me a joke') || message.includes('tell me joke') || message.includes('tell joke')){
            text_to_speak ="Here is a random joke. " + jokes[Math.floor(Math.random() * jokes.length)]

        }else if(message.includes('who are you')){
            text_to_speak = "My name is Faltu-bot, I am developed by Shivam. I am still under progress. "
        
        }else if(message.includes('what is your name')){
            text_to_speak = "My name is Faltu-bot. "
        }else if(message.includes("where is shivam") || message.includes("where is shevum")){
            text_to_speak = "Hmm, How do I suppose to know about that?"
        }else if(message.includes("what is time") || message.includes("tell me time") || message.includes("tell time")){
            var time = new Date()
            text_to_speak =   time.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',  hour12: true })
        }else if(message.includes("good morning")){
            var time = new Date()
            var curHr = time.getHours()

            if(curHr < 12){
                text_to_speak = "Hi there good morning. "
            }else{
                text_to_speak = "This isn't morning this time, well. "
            }
            text_to_speak = text_to_speak + `Current time is ${time.toLocaleString('en-US', { hour: 'numeric',minute: 'numeric',  hour12: true })}. 
            Wish you the best luck for today, hope something good happen`
        }else if(message.includes("I am sad") || message.includes("Im sad")){
            text_to_speak = "Awe....!, no problem! just go and jump from hight, you'll sadness will vanish, I promise, Try it"
        }else if(message.includes("I am happy")){
            text_to_speak = "Well seems like something bad is about to happen.. be prepared!"
        }else if(message.includes("I am bored")){
            var reply = ["ummm, I am also bored of you", "me too, lets talk about something else"]
            text_to_speak = reply[Math.floor(Math.random() * jokes.length)]
        }else if(message.includes("are you boy or girl") || message.includes("are you boy") || message.includes("are you girl") || message.includes("are you girl or boy")|| message.includes("are you a girl or boy") || message.includes("are you a girl")|| message.includes("are you a boy")){
            text_to_speak = "I am in somewhere middle. I hope you understand"
        }
        else{
            text_to_speak = "Sorry, I can't understand!"
        }

        // Setting up the speech
        speech.text = text_to_speak      
        speech.volume = 1        
        speech.rate = 1
        speech.pitch = 1
        window.speechSynthesis.speak(speech)
        return text_to_speak //return the text bot just spoke
    }catch(error){
        alert(error)
        console.textContent = error
    }
}