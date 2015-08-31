angular.module('myApp.search', ['myApp.factory'])
.controller('SearchEngine', function($scope, GoogleSearch){
	$scope.google= google;
	$scope.googleLoad = $scope.google.load('search', 1);
	$scope.city = '';
	$scope.searchQuery = '';
	$scope.elementId = '';
	$scope.executeOnLoad = function(){
		var searchReady = GoogleSearch.OnLoad($scope.city, $scope.searchQuery, $scope.elementId)
		$scope.google.setOnLoadCallback(searchReady);
	}
})