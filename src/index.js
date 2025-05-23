const readline = require("readline");
const repository = require("./repository.js");

let continueProgram = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const commands = [
  {
    command: "task-cli add <description>",
    description: "Add a new task",
  },
  {
    command: "task-cli update <id> <description>",
    description: "Update a task",
  },
  {
    command: "task-cli delete <id>",
    description: "Delete a task",
  },
  {
    command: "task-cli list <status>",
    description: "List tasks by status",
  },
  {
    command: "task-cli mark-in-progress <id>",
    description: "Mark a task as in progress",
  },
  {
    command: "task-cli mark-done <id>",
    description: "Mark a task as done",
  },
  {
    command: "exit",
    description: "Exit the program",
  },
];

const answer = () => {
  return new Promise((resolve) => {
    rl.question("Command: ", resolve);
  });
};

const commandLineListTaskCli = (command) => {
  switch (command.split(" ")[2]) {
    case "todo":
      console.info("Listing tasks todo...");
      console.table(repository.listTasks("todo"));
      break;
    case "done":
      console.info("Listing tasks done...");
      console.table(repository.listTasks("done"));
      break;
    case "in-progress":
      console.info("Listing tasks in progress...");
      console.table(repository.listTasks("in-progress"));
      break;
    case null:
    case undefined:
    case "":
      console.info("Listing tasks...");
      console.table(repository.listTasks());
      break;
    default:
      console.error(
        "Unknown command task-cli command. Type 'help' for available commands."
      );
  }
};

const commandLineAddTaskCli = (command) => {
  console.info("Adding task...");

  const description = command.split(" ").slice(2).join(" ").replace('"', "");

  if (!description || description === "") {
    console.error("Description is required");
    return;
  }

  repository.addTask(description);
};

const commandLineUpdateTaskCli = (command) => {
  console.info("Updating task...");

  let id = 0;

  try {
    id = parseInt(command.split(" ")[2]);
  } catch {
    console.error("Id incorrect");
    return;
  }

  const description = command.split(" ").slice(3).join(" ").replace('"', "");

  if (!description || description === "") {
    console.error("Description is required");
    return;
  }

  repository.updateTask(id, description);
};

const commandLineDeleteTaskCli = (command) => {
  console.info("Deleting task...");

  let id = 0;

  try {
    id = parseInt(command.split(" ")[2]);
  } catch {
    console.error("Id incorrect");
    return;
  }

  repository.deleteTask(id);
};

const commandLineChangeStatusTaskCli = (command) => {
  console.info("Changing status task...");

  let id = 0;

  const status = command.split(" ")[1];

  if (!status || status === "") {
    console.error("Status is required");
    return;
  }

  try {
    id = parseInt(command.split(" ")[2]);
  } catch {
    console.error("Id incorrect");
    return;
  }

  repository.updateTask(id, null, status.split("-").slice(1).join("-"));
};

const commandLineHelpCli = () => {
  console.info("Available commands:");
  console.table(commands);
};

const commandLineTaskCli = (command) => {
  switch (command.split(" ")[1]) {
    case "add":
      commandLineAddTaskCli(command);
      break;
    case "update":
      commandLineUpdateTaskCli(command);
      break;
    case "delete":
      commandLineDeleteTaskCli(command);
      break;
    case "list":
      commandLineListTaskCli(command);
      break;
    case "mark-in-progress":
      commandLineChangeStatusTaskCli(command);
      break;
    case "mark-done":
      commandLineChangeStatusTaskCli(command);
      break;
    case "help":
      commandLineHelpCli();
      break;
    default:
      console.error(
        "Unknown command task-cli command. Type 'help' for available commands."
      );
  }
};

async function main() {
  while (continueProgram) {
    const command = await answer();
    switch (command.split(" ")[0]) {
      case "task-cli":
        commandLineTaskCli(command);
        break;
      case "exit":
        continueProgram = false;
        rl.close();
        break;
      default:
        console.log(
          "Unknown command. Type 'task-cli help' for available commands."
        );
    }
  }
}

main();
