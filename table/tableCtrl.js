(function () {
    "use strict";

    angular.module("table")
        .controller("tableCtrl", TableCtrl);

    function TableCtrl($scope) {

        $scope.deleteItem = deleteItem;
        $scope.deleteAllCompletedItems = deleteAllCompletedItems;
        $scope.headers = [
            { "label": "Description", "column": "action"},
            { "label": "Done", "column": "done"},
            { "label": "Deadline", "column": "deadline"},
            { "label": "Estimated hours", "column": "estHours"}
        ];
        $scope.sortParams = { sortColumn: 'action', reverse: false };

        function deleteItem(items, deletedItem) {
            var index = items.indexOf(deletedItem);
            if (index > -1) {
                items.splice(index, 1);
            }
        }

        function deleteAllCompletedItems(items) {
            var completedItems = [];
            angular.forEach(items, function (item) {
                if (item.done === true) {
                    completedItems.push(item);
                }
            });
            angular.forEach(completedItems, function (completedItem) {
                deleteItem(items, completedItem);
            });
        }
    }
})();