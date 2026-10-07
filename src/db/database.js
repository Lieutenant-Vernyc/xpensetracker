import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system/legacy';

const db = SQLite.openDatabaseSync('xpensetracker.db');

export function initializeDatabase() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      make TEXT,
      model TEXT,
      year TEXT,
      vin TEXT,
      auctionSource TEXT,
      purchasePrice REAL,
      salePrice REAL,
      imageUri TEXT,
      notes TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      projectId INTEGER NOT NULL,
      expenseName TEXT,
      category TEXT,
      amount REAL,
      vendor TEXT,
      notes TEXT,
      receiptUri TEXT,
      expenseDate TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS project_tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      projectId INTEGER NOT NULL,
      taskText TEXT NOT NULL,
      notes TEXT,
      priority TEXT,
      isDone INTEGER DEFAULT 0,
      handwritingUri TEXT,
      createdAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  try {
    db.execSync(`
      ALTER TABLE expenses ADD COLUMN expenseDate TEXT;
    `);
  } catch (error) {
    // already exists
  }

  try {
    db.execSync(`
      ALTER TABLE project_tasks ADD COLUMN handwritingUri TEXT;
    `);
  } catch (error) {
    // already exists
  }
}

export async function saveImage(uri, folder = 'receipts') {
  const targetFolder = `${FileSystem.documentDirectory}${folder}/`;
  const folderInfo = await FileSystem.getInfoAsync(targetFolder);

  if (!folderInfo.exists) {
    await FileSystem.makeDirectoryAsync(targetFolder, {
      intermediates: true
    });
  }

  const filename = uri.split('/').pop() || `file-${Date.now()}.jpg`;
  const newUri = `${targetFolder}${Date.now()}-${filename}`;

  await FileSystem.copyAsync({
    from: uri,
    to: newUri
  });

  return newUri;
}

export async function saveBase64Image(base64Data, folder = 'task-handwriting') {
  const targetFolder = `${FileSystem.documentDirectory}${folder}/`;
  const folderInfo = await FileSystem.getInfoAsync(targetFolder);

  if (!folderInfo.exists) {
    await FileSystem.makeDirectoryAsync(targetFolder, {
      intermediates: true
    });
  }

  const filename = `${Date.now()}.png`;
  const fileUri = `${targetFolder}${filename}`;
  const cleanBase64 = base64Data.replace(/^data:image\/png;base64,/, '');

  await FileSystem.writeAsStringAsync(fileUri, cleanBase64, {
    encoding: FileSystem.EncodingType.Base64
  });

  return fileUri;
}

export function addProject(project) {
  const stmt = db.prepareSync(`
    INSERT INTO projects (
      make,
      model,
      year,
      vin,
      auctionSource,
      purchasePrice,
      salePrice,
      imageUri,
      notes
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  try {
    stmt.executeSync([
      project.make,
      project.model,
      project.year,
      project.vin,
      project.auctionSource,
      Number(project.purchasePrice || 0),
      Number(project.salePrice || 0),
      project.imageUri,
      project.notes
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function getProjects() {
  return db.getAllSync(`
    SELECT *
    FROM projects
    ORDER BY id DESC
  `);
}

export function getProject(projectId) {
  return db.getFirstSync(
    `SELECT * FROM projects WHERE id = ?`,
    [projectId]
  );
}

export function updateProject(project) {
  const stmt = db.prepareSync(`
    UPDATE projects
    SET
      make = ?,
      model = ?,
      year = ?,
      vin = ?,
      auctionSource = ?,
      purchasePrice = ?,
      salePrice = ?,
      imageUri = ?,
      notes = ?
    WHERE id = ?
  `);

  try {
    stmt.executeSync([
      project.make,
      project.model,
      project.year,
      project.vin,
      project.auctionSource,
      Number(project.purchasePrice || 0),
      Number(project.salePrice || 0),
      project.imageUri,
      project.notes,
      Number(project.id)
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function deleteProject(projectId) {
  const stmt = db.prepareSync(`
    DELETE FROM projects
    WHERE id = ?
  `);

  try {
    stmt.executeSync([Number(projectId)]);
  } finally {
    stmt.finalizeSync();
  }

  const deleteExpensesStmt = db.prepareSync(`
    DELETE FROM expenses
    WHERE projectId = ?
  `);

  try {
    deleteExpensesStmt.executeSync([Number(projectId)]);
  } finally {
    deleteExpensesStmt.finalizeSync();
  }

  const deleteTasksStmt = db.prepareSync(`
    DELETE FROM project_tasks
    WHERE projectId = ?
  `);

  try {
    deleteTasksStmt.executeSync([Number(projectId)]);
  } finally {
    deleteTasksStmt.finalizeSync();
  }
}

export function addExpense(expense) {
  const stmt = db.prepareSync(`
    INSERT INTO expenses (
      projectId,
      expenseName,
      category,
      amount,
      vendor,
      notes,
      receiptUri,
      expenseDate
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  try {
    stmt.executeSync([
      Number(expense.projectId),
      expense.expenseName,
      expense.category,
      Number(expense.amount || 0),
      expense.vendor,
      expense.notes,
      expense.receiptUri,
      expense.expenseDate || null
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function getExpenses(projectId) {
  return db.getAllSync(
    `SELECT * FROM expenses WHERE projectId = ? ORDER BY id DESC`,
    [projectId]
  );
}

export function getExpenseById(expenseId) {
  return db.getFirstSync(
    `SELECT * FROM expenses WHERE id = ?`,
    [expenseId]
  );
}

export function updateExpense(expense) {
  const stmt = db.prepareSync(`
    UPDATE expenses
    SET
      expenseName = ?,
      category = ?,
      amount = ?,
      vendor = ?,
      notes = ?,
      receiptUri = ?,
      expenseDate = ?
    WHERE id = ?
  `);

  try {
    stmt.executeSync([
      expense.expenseName,
      expense.category,
      Number(expense.amount || 0),
      expense.vendor,
      expense.notes,
      expense.receiptUri,
      expense.expenseDate || null,
      Number(expense.id)
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function deleteExpense(expenseId) {
  const stmt = db.prepareSync(`
    DELETE FROM expenses
    WHERE id = ?
  `);

  try {
    stmt.executeSync([Number(expenseId)]);
  } finally {
    stmt.finalizeSync();
  }
}

export function addTask(task) {
  const stmt = db.prepareSync(`
    INSERT INTO project_tasks (
      projectId,
      taskText,
      notes,
      priority,
      isDone,
      handwritingUri
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  try {
    stmt.executeSync([
      Number(task.projectId),
      task.taskText,
      task.notes || '',
      task.priority || 'Medium',
      Number(task.isDone || 0),
      task.handwritingUri || null
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function getTasksByProjectId(projectId) {
  return db.getAllSync(
    `
      SELECT *
      FROM project_tasks
      WHERE projectId = ?
      ORDER BY isDone ASC, id DESC
    `,
    [projectId]
  );
}

export function getTaskById(taskId) {
  return db.getFirstSync(
    `SELECT * FROM project_tasks WHERE id = ?`,
    [taskId]
  );
}

export function updateTask(task) {
  const stmt = db.prepareSync(`
    UPDATE project_tasks
    SET
      taskText = ?,
      notes = ?,
      priority = ?,
      handwritingUri = ?
    WHERE id = ?
  `);

  try {
    stmt.executeSync([
      task.taskText,
      task.notes || '',
      task.priority || 'Medium',
      task.handwritingUri || null,
      Number(task.id)
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function updateTaskHandwriting(taskId, handwritingUri) {
  const stmt = db.prepareSync(`
    UPDATE project_tasks
    SET handwritingUri = ?
    WHERE id = ?
  `);

  try {
    stmt.executeSync([
      handwritingUri || null,
      Number(taskId)
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function toggleTaskDone(taskId, currentValue) {
  const stmt = db.prepareSync(`
    UPDATE project_tasks
    SET isDone = ?
    WHERE id = ?
  `);

  try {
    stmt.executeSync([
      currentValue ? 0 : 1,
      Number(taskId)
    ]);
  } finally {
    stmt.finalizeSync();
  }
}

export function deleteTask(taskId) {
  const stmt = db.prepareSync(`
    DELETE FROM project_tasks
    WHERE id = ?
  `);

  try {
    stmt.executeSync([Number(taskId)]);
  } finally {
    stmt.finalizeSync();
  }
}

export function getProjectTotals(projectId) {
  const project = getProject(projectId);
  const expenses = getExpenses(projectId);

  const totalExpenses = expenses.reduce((sum, item) => {
    return sum + Number(item.amount || 0);
  }, 0);

  const purchasePrice = Number(project?.purchasePrice || 0);
  const salePrice = Number(project?.salePrice || 0);
  const totalInvested = purchasePrice + totalExpenses;
  const profit = salePrice - totalInvested;

  return {
    totalExpenses,
    totalInvested,
    profit
  };
}
