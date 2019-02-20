angular.module('business', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.businesses = [];
            $scope.businessesBank = [];
            
            $scope.businessesBank.push('Your local bakery');
            $scope.businessesBank.push('Your local bakery1');
            $scope.businessesBank.push('Your local bakery2');
            $scope.businessesBank.push('Your local bakery3');
            
            $scope.searchBusinesses = function(product) {
                var search = $scope.searchWord;
                for (var i = 0; i < $scope.businessesBank.length; i++) {
                    if($scope.businessesBank[i].includes(search)) {
                      $scope.businesses.push($scope.businessesBank[i]);
                    }
                }
                console.log("size: " + $scope.businesses.length);
            };
        }
    ]);