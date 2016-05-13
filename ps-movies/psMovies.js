(function () {
    'use strict';
    angular.module('psMovies', [])
        .component('movieList', {
            templateUrl: 'ps-movies/psMovies.tpl.html',
            controller: controller,
            controllerAs: 'vm'
        })

    function controller($http) {
        var vm = this;
        vm.movies = [];
        vm.$onInit = function () {
            fetchMovie($http).then(function (movies) {
                vm.movies = movies;
            });
        }
        vm.upVote = function (movie) {
            movie.vote++;
        }

        vm.downVote = function (movie) {
            movie.vote--;
        }

    }

    function fetchMovie($http) {
        return $http.get('movies.json').then(function (response) {
            return response.data;
        })
    }

}());

