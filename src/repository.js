const fs = require("fs");
const path = require("path");

const pathFile = path.join(__dirname, "tasks.json");

const saveTasks = (taskList) => {
  fs.writeFileSync(pathFile, JSON.stringify(taskList, null, 2), "utf-8");
};

const readTasks = () => {
  if (!fs.existsSync(pathFile)) {
    return [];
  }

  const tasks = fs.readFileSync(pathFile, "utf-8");

  if (!tasks) {
    return [];
  }
  return JSON.parse(tasks);
};

const addTask = (description) => {
  const tasks = readTasks();

  let id = 1;
  if (tasks.length !== 0) id = tasks[tasks.length - 1].id + 1;

  const task = {
    id,
    description,
    status: "todo",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(task);

  saveTasks(tasks);
  console.info("Task added successfully");
};

const updateTask = (id, description, status) => {
  const tasks = readTasks();

  const task = tasks.find((t) => t.id === id);

  if (task === undefined || task === null) {
    console.error("Task not found");
    return;
  }

  if (description) {
    task.description = description;
  }
  if (status) {
    task.status = status;
  }
  task.updatedAt = new Date();

  const index = tasks.findIndex((t) => t.id === id);
  tasks[index] = task;

  saveTasks(tasks);
  console.info("Task updated successfully");
};

const deleteTask = (id) => {
  const tasks = readTasks();

  const task = tasks.find((t) => t.id === id);

  if (task === undefined || task === null) {
    console.error("Task not found");
    return;
  }

  const newTasks = tasks.filter((t) => t.id !== id);

  saveTasks(newTasks);
  console.info("Task deleted successfully");
};

const listTasks = (status) => {
  const tasks = readTasks();

  if (status) {
    const filteredTasks = tasks.filter((t) => t.status === status);
    return filteredTasks;
  }

  return tasks;
};

module.exports = { addTask, updateTask, deleteTask, listTasks };
