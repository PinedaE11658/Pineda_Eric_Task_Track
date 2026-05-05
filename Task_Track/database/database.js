import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabaseSync('tasks_2.db');

export const init = () => { 
    db.execSync('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL DEFAULT \'Not Started\', priority TEXT NOT NULL DEFAULT \'Medium\');'
    );
}

export function getTasks() {
    return db.getAllSync('SELECT * FROM tasks;');
}

export function addTask(task) {
    return db.runSync('INSERT INTO tasks (title, description, status, priority) VALUES (?, ?, ?, ?);', [task.title, task.description, task.status, task.priority]);
}

export function deleteTask(id) {
    return db.runSync('DELETE FROM tasks WHERE id = ?;', [id]);
}

export default db;