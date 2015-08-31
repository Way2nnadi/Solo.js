var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function(event) {
	//take whatever this event represents then push it
	//into the Google API 
  console.log(event) 
}
recognition.start();
console.log('hello world')