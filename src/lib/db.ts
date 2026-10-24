import fs from 'fs';
import path from 'path';
import { DatabaseSchema } from '@/types';

const DB_FILE = path.join(process.cwd(), 'data', 'database.json');

export function getDb(): DatabaseSchema | null {
  try {
    if (!fs.existsSync(DB_FILE)) {
      console.error(`DB file not found at: ${DB_FILE}`);
      return null;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw) as DatabaseSchema;
  } catch (err) {
    console.error('Error reading database file:', err);
    return null;
  }
}

export function saveDb(data: DatabaseSchema): boolean {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing database file:', err);
    return false;
  }
}
