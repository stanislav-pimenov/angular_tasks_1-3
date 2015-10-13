(function () {
    "use strict";

    angular.module("form", [])
        .controller("formCtrl", FormCtrl);

    function FormCtrl($scope) {

        $scope.addNewItem = addNewItem;
        $scope.isCompleteItem = isCompleteItem;

        function addNewItem(items, newItem) {
            if (newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    deadline: newItem.deadline,
                    estHours: newItem.estHours,
                    done: false
                });

                newItem.action = "";
                newItem.deadline = "";
                newItem.estHours = "";
            }
        }

        function isCompleteItem(item) {
            return item && item.action && item.deadline && item.estHours;
        }
    }

})();