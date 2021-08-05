
import * as fs from 'fs';
import * as path from 'path';
import { HealthReportRequest } from './interface';

const rootPath = process.env['DATA_PATH'] || '/data';

export const pageHashPath = path.resolve(rootPath, '.pageHash');
export const infoDirPath = path.resolve(rootPath, 'old_info');

fs.mkdirSync(infoDirPath, { recursive: true });

export function updateAndVerifyPageHash(pageHash: string): boolean {
    if (!fs.existsSync(pageHashPath)) {
        fs.writeFileSync(pageHashPath, pageHash);
    }
    const localHash = fs.readFileSync(pageHashPath, { encoding: 'utf-8' });
    return localHash == pageHash;
}

export function writeOldInfo(fileName: string, info: HealthReportRequest): void {
    fs.writeFileSync(path.join(infoDirPath, `${fileName}.json`), JSON.stringify(info));
}
