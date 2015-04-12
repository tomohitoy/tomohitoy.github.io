(function(){
  "use strict";
  var tomohitoy  = {};
  tomohitoy.url = {};
  tomohitoy.url.basic = "./db/basic.json";
  tomohitoy.url.publications = "./db/publications.json";
  tomohitoy.url.introduction = "./db/introduction.json";
  tomohitoy.name = "Tomohito Yamazaki";
  var tomohitoyApp = angular.module("tomohitoyApp",[]);
  tomohitoyApp.controller("BasicController", function($scope, $http) {
    $http.get(tomohitoy.url.basic)
      .success(function(data){
        $scope.basic = data;
      })
      .error(function(data){
      });
  });
  tomohitoyApp.controller("PublicationsController", function($scope,$http){
    $http.get(tomohitoy.url.publications)
      .success(function(data){
        $scope.publications = data;
      })
      .error(function(data){
        alert("Fail to connect publications.json");
      })
  });
  tomohitoyApp.controller("IntroductionController", function($scope,$http){
    $http.get(tomohitoy.url.introduction)
      .success(function(data){
        $scope.businesses = data.businesses;
        $scope.hobbies = data.hobbies;
      })
      .error(function(data){
        alert("Fail to connect introduction.json");
      })
  });
})();
