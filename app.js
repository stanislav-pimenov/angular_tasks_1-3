(function () {
    "use strict";

    angular.module("todoApp", [
            "header",
            "table",
            "form"])
        .run(runApp)
        .value("model", {
            user: "Stanislav",
            userPhoto: "./images/Stanislav_Pimenov.png" //,
            // items: [
            // 	{ "action": "Estimate...", "done": false },
            // 	{ "action": "Create...", "done": false },
            // 	{ "action": "Edit...", "done": true },
            // 	{ "action": "Delete...", "done": false }
            // ]
        })
        .controller("Todo", Todo);

    function runApp($http, model) {
        $http
            .get("todo.json")
            .success(function (data) {
                model.items = data;
            });
    }

    function Todo($scope, model) {
        // public API
        $scope.todo = model;
        // $scope.showComplete = true;
    }
})();