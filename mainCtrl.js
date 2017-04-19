angular.module('giphyThing').controller('mainCtrl', function($scope, mainServ){

  //this is where all of your controller code goes
  $scope.name = "Josh Harris";

  $scope.searchNew = function(search){
    mainServ.getGiphys(search)
    .then(function(res){
    $scope.gifs = res.data;
  });
};

  $scope.searchNew("trending");
});
