(function () {
    "use strict";

    angular.module("header", [])
        .controller("headerCtrl", HeaderCtrl);

    function HeaderCtrl($scope) {

        $scope.incompleteCount = incompleteCount;
        $scope.warningLevel = warningLevel;

        function incompleteCount(items) {
            var count = 0;

            angular.forEach(items, function (item) {
                if (!item.done) count++;
            });
            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? "label-success" : "label-warning";
        }
    }

})();