// Code goes here
var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
    $scope.todos = [{
        text: "Learn Angular",
        priority: "Now",
        edit: false,
        done: false
    }, {
        text: "Learn node",
        priority: "Now",
        edit: false,
        done: false
    }];
    $scope.newItem = "";
    $scope.totalNumber = 2;  // Used to store the number of items (GG)

    $scope.addItem = function() {
        if ($scope.newItem !== "") {
            $scope.todos.push({
                text: $scope.newItem,
                edit: false,
                priority: "Now"
            });
            $scope.newItem = "";
            $scope.totalNumber += 1;
        }
    }

    /*
        Added by: Gonzalo
        Task #7: Add todo items with enter rather than add button.
    */
    $scope.enterAddItem = function($event){
      var keyCode = $event.which || $event.keyCode;

      if (keyCode === 13) {
          $scope.addItem();
      }
    };

    $scope.deleteItem = function(item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos.splice(index, 1);
        $scope.totalNumber -= 1;
    }

    // function to delete all items. Stores current todos in a temp list, clears $scope.todos, and then repopulates it with uncompleted tasks
    $scope.deleteCompletedItems = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(item) {
            if (!item.done) {
                $scope.todos.push(item);
            } else {
                $scope.totalNumber -= 1;
            }
        });
    }

    /*
        Added by: Gonzalo
        Task #3: Add edit button functionality - show/hide input box when user clicks edit button.
    */
    $scope.editItem = function(item) {
        var index = $scope.todos.indexOf(item);
        $scope.todos[index].edit = !$scope.todos[index].edit;
    }

    /*
        Added by: Gonzalo
        Task #3: Add edit button functionality - submit edit with enter key.
    */
    $scope.keyEnter = function($event, item) {
        var index = $scope.todos.indexOf(item);
        var keyCode = $event.which || $event.keyCode;

        if (keyCode === 13) {
            $scope.todos[index].edit = false;
        }
    }

    $scope.completeItem = function(item) {
        item.done = !item.done;
    }

    /*
      Used to sort the todos by priority. Todos with a "Now" priority will go first, then the todos with a
      "Tomorrow" priority, then the todos with a "Someday" priority.
    */
    $scope.sortByPriority = function(dos) {
      if(dos.priority === "Now"){
        return 0;
      }
      else if(dos.priority === "Tomorrow"){
        return 1;
      }
      else {
        return 2;
      }
    }
});
