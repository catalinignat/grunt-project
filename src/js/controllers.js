var _controllers;
var Controllers = function () {
    //this is main controller
    Controllers.prototype.rootCtrl = function () {
        console.log("call RootCtrl!");
    }
    Controllers.prototype.HomeCtrl = function($scope){
        
    }
}

_controllers = new Controllers();

//_controllers.rootCtrl.$inject = ["$scope"];
app.controller("RootCtrl", _controllers.rootCtrl);
_controllers.HomeCtrl.$inject = ["$scope"];
app.controller("HomeCtrl", _controllers.HomeCtrl);