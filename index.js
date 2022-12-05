"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url)
    .then(function (response) {
    console.log(response.data);
    var todo = response.data[0];
    var ID = todo.ID;
    var title = todo.title;
    var finished = todo.finished;
    console.log("\n        The Todo with ID: ".concat(ID, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(finished, "\n    "));
});
