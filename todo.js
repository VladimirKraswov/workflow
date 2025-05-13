const fs = require('fs');
const path = './tasks.json';

function loadTasks() {
  if (!fs.existsSync(path)) return [];
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function saveTasks(tasks) {
  fs.writeFileSync(path, JSON.stringify(tasks, null, 2));
}

function addTask(text) {
  const tasks = loadTasks();
  const newTask = { id: Date.now(), text, done: false };
  tasks.push(newTask);
  saveTasks(tasks);
  console.log('Задача добавлена.');
}

function listTasks() {
  const tasks = loadTasks();
  if (tasks.length === 0) return console.log('Список задач пуст.');
  tasks.forEach((t, i) => {
    const mark = t.done ? '✅' : '❌';
    console.log(`${i + 1}. ${mark} ${t.text}`);
  });
}

function markDone(index) {
  const tasks = loadTasks();
  if (!tasks[index - 1]) return console.log('Задача не найдена.');
  tasks[index - 1].done = true;
  saveTasks(tasks);
  console.log('Задача отмечена как выполненная.');
}

function deleteTask(index) {
  const tasks = loadTasks();
  if (!tasks[index - 1]) return console.log('Задача не найдена.');
  tasks.splice(index - 1, 1);
  saveTasks(tasks);
  console.log('Задача удалена.');
}

module.exports = { addTask, listTasks, markDone, deleteTask };
