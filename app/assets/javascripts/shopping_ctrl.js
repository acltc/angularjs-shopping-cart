(function() {
  "use strict";

  angular.module("app").controller("shoppingCtrl", function($scope) {
    $scope.products = [
      {
        name: "Twisty Tie",
        price: 0.1
      },
      {
        name: "John Hancock Building",
        price: 1000000000
      },
      {
        name: "Cheese Sandwich",
        price: 1.5
      }
    ];

    $scope.cart = [];

    $scope.addProductToCart = function(product) {
      $scope.cart.push(product);
    };

    $scope.subtotal = function() {
      var subtotal = 0;
      for(var i = 0; i < $scope.cart.length; i++) {
        subtotal += $scope.cart[i].price;
      }
      return subtotal;
    }

    $scope.tax = function() {
      return $scope.subtotal() * 0.09;
    }

    $scope.total = function() {
      return $scope.subtotal() + $scope.tax();
    }

    $scope.removeItem = function(cartIndex) {
      $scope.cart.splice(cartIndex, 1);
    };

  });

}());