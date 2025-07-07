import fs from 'fs';
import path from 'path';
const REPO_ROOT = path.resolve(process.cwd(), '../..')

export const extractCodeFromFilePath = (filePath: string) => {
  try {
    console.log("filePath",filePath);
    
    const absolutePath = path.join(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (e) {
    console.error("Failed to load code file:", filePath, e);
    return "// Code not found";
  }
};

export const extractCodeFromPackages = (filePath: string) => {
  try {
    const absolutePath = path.join(REPO_ROOT, filePath);
    console.log("Resolved path:", absolutePath)
    return fs.readFileSync(absolutePath, 'utf-8');
  } catch (e) {
    console.error("Failed to load code file:", filePath, e);
    return "// Code not found";
  }
};

