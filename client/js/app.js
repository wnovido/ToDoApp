/**
 * Created by wilso_000 on 11/28/2014.
 */
todoApp = angular.module('todoApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: '/partials/todo.html',controller: 'TodoCtrl'}).
            otherwise({redirectTo: '/'});
    });