if (!('webkitSpeechRecognition' in window)) {
    //Speech API not supported here…
    console.log('you cant do this shit');
} else { //Let’s do some cool stuff :)
    var recognition = new webkitSpeechRecognition(); 
    recognition.continuous = true;  
    recognition.interimResults = true;  
    recognition.lang = "en-US"; 
    recognition.maxAlternatives = 1; 
}
recognition.onstart = function() {

    alert('started listening');
};

recognition.onend = function() {
    console.log('stopped listening')
};

recognition.onresult = function(event) { 
    if (typeof(event.results) === 'undefined') { 
        recognition.stop();
        return;
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {      
        if (event.results[i].isFinal) { //Final results
            console.log("final results: " + event.results[i][0].transcript);   
        } else {   //i.e. interim...
            console.log("interim results: " + event.results[i][0].transcript); 
        } 
    } //end for loop
}; 

function startButton(event) {
    recognition.start();
    start_img.src = 'https://speechlogger.appspot.com/images/micslash2.png'; 
}
