angular.module('app').controller('ContactController', function() {
    this.name = "Tyler Machen";
    this.email = "tylermachen@gmail.com";
    this.phone = "123-456-7891";

    var vm = this;

    this.changeName = function () {
      vm.name = 'Something else!';
    };
});
