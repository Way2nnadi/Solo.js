angular.module('myApp', [])
.controller('soloInput', function($scope){
  var presetText = ['You Are Amazing!!!', ' You can do anything brah', 'You aint no punk so dont get punked']
  $scope.inputs = {
    text: presetText,
  };
  $scope.otherInputs = ''
  $scope.soloSpeak = function(){
    for(var i=0; i<$scope.inputs.text.length; i++){
      speechSynthesis
      .speak(new SpeechSynthesisUtterance($scope.inputs.text[i])); 
    }
  }
  $scope.addBooster = function(){
    $scope.inputs.text.push($scope.otherInputs);
    $scope.soloSpeak();
  }

})