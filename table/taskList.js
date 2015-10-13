(function () {
    "use strict";

    angular.module("table", [])
        .directive("taskList", taskList);

    function taskList() {
        return {
            restrict: "A",
            templateUrl: "table/table.html"
        };
    }
})();