const [,, cmd, ...args] = process.argv;
const todo = require('./todo');

switch (cmd) {
  case 'add':
    todo.addTask(args.join(' '));
    break;
  case 'list':
    todo.listTasks();
    break;
  case 'done':
    todo.markDone(parseInt(args[0]));
    break;
  case 'delete':
    todo.deleteTask(parseInt(args[0]));
    break;
  default:
    console.log(`Команды:
  add "текст задачи"
  list
  done <номер>
  delete <номер>`);
}
