(function(){
  "use strict";
  var tomohitoy  = {};
  tomohitoy.url = {};
  tomohitoy.url.basic = "./db/basic.json";
  tomohitoy.url.about = "./db/about.json";
  tomohitoy.url.service = "./db/service.json";
  tomohitoy.url.works = "./db/works.json";
  var tomohitoyApp = angular.module("tomohitoyApp",[]);
  tomohitoyApp.controller("BasicController", function($scope, $http) {
    $http.get(tomohitoy.url.basic)
      .success(function(data){
        $scope.basic = data;
      })
      .error(function(data){
      });
  });
  tomohitoyApp.controller("AboutController", function($scope, $http) {
    $http.get(tomohitoy.url.about)
      .success(function(data){
        $scope.introduction = data.introduction;
        $scope.hobbies = data.hobbies;
      })
      .error(function(data){
      });
  });
  tomohitoyApp.controller("ServiceController", function($scope,$http){
    $http.get(tomohitoy.url.service)
      .success(function(data){
        $scope.services = data;
      })
      .error(function(data){
      })
  });
  tomohitoyApp.controller("WorksController", function($scope,$http){
    $http.get(tomohitoy.url.works)
      .success(function(data){
        $scope.business = data.business;
        $scope.academic = data.academic;
      })
      .error(function(data){
      })
  });
  tomohitoy.top_nav = $("#navbar").offset().top;
  tomohitoy.sticky = false;
  $(window).on("scroll",function(){
    if ($(window).scrollTop() > tomohitoy.top_nav) {
      if ( tomohitoy.sticky === false ) {
        $("#chaser").slideDown();
        tomohitoy.sticky = true;
        $("#topbtn").fadeIn();
      }
    } else {
      if (tomohitoy.sticky === true ) {
        $("#chaser").slideUp();
        tomohitoy.sticky = false;
        $("#topbtn").fadeOut();
      }
    }
  });
  $("a[href^=#]").on("click",function(){
    $("body, html").animate({scrollTop: $($(this).attr("href")).offset().top}, 400);
    return false;
  });
  $("#load").hide();
  $("#main").fadeIn();
})();
