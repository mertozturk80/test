(function() {
'use strict';

//Added this here

    angular
        .module('app' , [])
        .controller('HomeController', HomeController);

    HomeController.inject = ['$log'];
    function HomeController($log) {
        var vm = this;
        vm.title = "Hello World";

        activate();

        ////////////////

        function activate() { }
    }
})();