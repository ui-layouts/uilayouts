import fs from 'fs/promises';
import path from 'path';

export async function getComponentCode(componentName: string): Promise<string> {
  try {
    // Construct the file path: components/ui/{componentName}.tsx
    const filePath = path.join(
      process.cwd(),
      'components',
      'ui',
      `${componentName}.tsx`
    );

    // Read and return the file content
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error(`Error loading component file for ${componentName}:`, error);
    return `// Error: Could not load components/ui/${componentName}.tsx`;
  }
}
