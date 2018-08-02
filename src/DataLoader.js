import fs from 'fs';
import path from 'path';
import util from 'util';

const STUDENTS_PATH = './src/data/output.json';
const readFileAsync = util.promisify(fs.readFile);

export default class DataLoader {
  static loadStudents() {
    return readFileAsync(STUDENTS_PATH);
  }
}
