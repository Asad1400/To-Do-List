import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const addTask = await inquirer.prompt([
        {
            type: "input",
            name: "todo",
            message: "What do you want to enter in the todos"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more tasks?",
            default: false
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
