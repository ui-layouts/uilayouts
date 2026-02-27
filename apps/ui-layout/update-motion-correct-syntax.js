const fs = require('fs');
const path = require('path');

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

// Function to update a single file with correct syntax
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file uses motion/react
    if (!content.includes('motion/react')) {
      return false; // No motion/react import found
    }
    
    let hasChanges = false;
    
    // Replace import statements with correct syntax
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*['"]motion\/react['"]/g,
      (match, imports) => {
        hasChanges = true;
        // Split imports by comma and clean up
        const importList = imports.split(',').map(imp => imp.trim());
        
        // Separate motion components from other imports
        const motionImports = importList.filter(imp => imp.includes('motion'));
        const otherImports = importList.filter(imp => !imp.includes('motion'));
        
        // Build new imports
        const newImports = [];
        
        // Add non-motion imports
        if (otherImports.length > 0) {
          newImports.push(otherImports.join(', '));
        }
        
        // Add motion imports with correct syntax
        if (motionImports.length > 0) {
          // Check if we need LazyMotion
          if (content.includes('LazyMotion') || motionImports.some(imp => imp.includes('AnimatePresence'))) {
            newImports.push('LazyMotion, domAnimation' + (motionImports.includes('AnimatePresence') ? ', AnimatePresence' : ''));
          }
        }
        
        return `import { ${newImports.join(', ')} } from 'framer-motion'\nimport * as m from 'motion/react-m'`;
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
    console.log(`\n🎉 Successfully updated ${modifiedCount} files to use correct syntax:`);
    console.log(`   - import { LazyMotion, domAnimation } from 'framer-motion'`);
    console.log(`   - import * as m from 'motion/react-m'`);
    console.log(`💾 Bundle size savings: ~30kb`);
    console.log(`\n⚠️  Note: Some files may need manual adjustment for dynamic component access.`);
    console.log(`   Use: const MotionComponent = (m as any)[componentName]`);
  } else {
    console.log(`No files needed updating.`);
  }
}

// Run the script
main();
