const { Router } = require("express");
// const TasksTable = require("../../todo-tasks/table");
// const { authenticated } = require("./helper");
const router = new Router();

router.get("/p1", (req, res) => {
    res.send("HelloWorld!")
});

// router.post("/getall", authenticated, (req, res, next) => {
//   TasksTable.getTasks()
//     .then((tasks) => res.json({ tasks }))
//     .catch((error) => next(error));
// });

module.exports = router;