angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
  var item = {
      coordinates: [pos.coords.latitude, pos.coords.longitude]
  };
  var woa = {
      city: 'Here is my marker'
  };
 var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        mapTypeId: google.maps.MapTypeId.HYBRID
  };

 
 $scope.mymapdetail = new google.maps.Map(document.getElementById('map'), mapOptions);
    
$scope.mymarker = new google.maps.Marker({
        map: $scope.mymapdetail,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(item.coordinates[0], item.coordinates[1]),
        title: woa.city
    });
 
 $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: true
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
