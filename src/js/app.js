var app = angular.module("app", ["ui.router", "ngSanitize"]);

app.run(function ($rootScope, $state) {
    


$rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {


    });
});

app.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: _controllers.HomeCtrl

        })
        .state('introduction', {
            url: '/introduction',
            templateUrl: 'templates/introduction.html',
            controller: function ($scope) {
                console.log("dasdsda")
            }
        });
    $urlRouterProvider.otherwise("home");
});