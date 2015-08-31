angular.module('myApp.factory',[])
.factory('HTMLRecognition', function(){
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.onresult = function(event) {
	//take whatever this event represents then push it
	//into the Google API 
  		console.log(event) 
  		return event;
	}
	return{
		recognition: recognition
	}
})
.factory('GoogleSearch', function(){
	var OnLoad = function(city, searchQuery, htmlElementId){
		var searchControl = new google.search.searchControl();
		
		var localSearch = new google.search.LocalSearch();
		searchControl.addSearcher(localSearch);
		searchControl.addSearcher(new google.search.WebSearch());
		searchControl.addSearcher(new google.search.VideoSearch());
		searchControl.addSearcher(new google.search.BlogSearch());
		searchControl.addSearcher(new google.search.NewsSearch());
		searchControl.addSearcher(new google.search.ImageSearch());
		searchControl.addSearcher(new google.search.BookSearch());
		searchControl.addSearcher(new google.search.PatentSearch());

		localSearch.setCenterPoint(city);

  // tell the searcher to draw itself and tell it where to attach
  		searchControl.draw(document.getElementById(htmlElementId));

  		searchControl.execute(searchQuery);

	}

	return{
		OnLoad: OnLoad,
	}
})