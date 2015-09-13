// Code goes here
var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
    $scope.todos = [{
        text: "Learn Angular",
        edit: false
    }, {
        text: "Learn node",
        edit: false
    }];
    $scope.newItem = "";

    $scope.addItem = function() {
        console.log("in add");
        if ($scope.newItem !== "") {
            $scope.todos.push({text:$scope.newItem, edit:false});
            $scope.newItem = "";
        }
    }

    $scope.deleteItem = function(item) {
        console.log("in delete");
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
    }

    $scope.editItem = function(item) {
      var index = $scope.todos.indexOf(item);

      if ($scope.todos[index].edit === true) {
           $scope.todos[index].edit = false;
       } else {
           $scope.todos[index].edit = true;
       }
    }

    $scope.keyEnter = function($event, item) {
       var index = $scope.todos.indexOf(item);

       if ($event.keyCode == 13) {
           $scope.todos[index].edit = false;
       }
   }
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 *
 * *********************/
