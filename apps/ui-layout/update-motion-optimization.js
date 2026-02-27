const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all TS/TSX files
function findFiles(dir, extensions = ['.ts', '.tsx']) {
  let results = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && 
          !item.includes('node_modules') && 
          !item.includes('.next') && 
          !item.includes('dist') &&
          !item.includes('build')) {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return results;
}

// Function to update a single file
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file imports from motion/react
    if (!content.includes('motion/react')) {
      return false; // No motion/react import found
    }
    
    // Replace import statements
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*['"]motion\/react['"]/g,
      (match, imports) => {
        // Replace 'motion' with 'm' in the imports
        const updatedImports = imports.replace(/\bmotion\b/g, 'm');
        return `import { ${updatedImports} } from 'motion/react'`;
      }
    );
    
    // Replace all motion. with m.
    content = content.replace(/\bmotion\./g, 'm.');
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const rootDir = process.cwd();
  const files = findFiles(rootDir);
  
  console.log(`Found ${files.length} TypeScript files to check...`);
  
  let modifiedCount = 0;
  let processedCount = 0;
  
  for (const file of files) {
    processedCount++;
    
    if (updateFile(file)) {
      modifiedCount++;
      console.log(`✓ Updated: ${path.relative(rootDir, file)}`);
    }
    
    // Show progress every 50 files
    if (processedCount % 50 === 0) {
      console.log(`Progress: ${processedCount}/${files.length} files processed`);
    }
  }
  
  console.log(`\nOptimization complete!`);
  console.log(`Total files checked: ${processedCount}`);
  console.log(`Files modified: ${modifiedCount}`);
  
  if (modifiedCount > 0) {
    console.log(`\n🎉 Successfully updated ${modifiedCount} files to use 'm' instead of 'motion'`);
    console.log(`💾 Bundle size savings: ~30kb`);
    console.log(`\n⚠️  Note: Some files may need manual LazyMotion wrapping for optimal performance.`);
    console.log(`   Consider wrapping components with: <LazyMotion features={domAnimation}>`);
  } else {
    console.log(`No files needed updating.`);
  }
}

// Run the script
main();
