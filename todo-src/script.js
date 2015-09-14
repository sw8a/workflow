// Code goes here
var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
    $scope.todos = [{
        text: "Learn Angular",
        edit: false,
        done: false
    }, {
        text: "Learn node",
        edit: false,
        done: false
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
// function to delete all items. Stores current todos in a temp list, clears $scope.todos, and then repopulates it with uncompleted tasks
    $scope.deleteCompletedItems = function ()
    {
     var oldTodos = $scope.todos; 
     $scope.todos = [];
     angular.forEach(oldTodos,function(item)
     {
      if(!item.done)
      {
        $scope.todos.push(item);
      }
     });
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

   $scope.completeItem = function(item) {
    item.done = !item.done;
    console.log("done")
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
