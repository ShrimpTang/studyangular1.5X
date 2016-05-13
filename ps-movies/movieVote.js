(function () {
    'user strict'
    angular.module('psMovies')
        .component('movieVote', {
            templateUrl: 'ps-movies/movieVote.tpl.html',
            bindings: {
                value: '<'
            },
            controllerAs: 'vm',
            controller: function () {
                var vm = this;

                vm.$onInit = function () {
                    vm.votes = new Array(vm.value);
                }
                vm.$onChanges = function () {
                    vm.votes = new Array(vm.value);
                }
            }
        })
}());