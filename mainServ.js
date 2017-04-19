angular.module('giphyThing').service('mainServ',function($http){


// this is where all of the service code will go
this.getGiphys = function(search){
  return $http({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/search?q="+search+"&api_key=dc6zaTOxFJmzC"
  }).then(function(res){
    return res.data;
  })
}


});
