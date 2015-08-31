angular.module('myApp.Recognize', ['myApp.factory'])
.controller('SpeechRecognition', function($scope, HTMLRecognition){
	$scope.recognizedInput = '';
	$scope.onResult = function(){
		$scope.recognizedInput = HTMLRecognition.recognition.onResult()
	}

	$HTMLRecognition.recognition.start()
})