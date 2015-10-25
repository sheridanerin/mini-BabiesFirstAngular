var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
	$scope.friends = ['John', 'Suzy', 'David', 'Phil', 'Aylin', 'Joe'];
	
	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};
});

