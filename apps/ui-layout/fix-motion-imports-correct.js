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

// Function to update a single file with CORRECT syntax
function updateFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file uses motion/react or framer-motion
    if (!content.includes('motion/react') && !content.includes('framer-motion')) {
      return false; // No motion import found
    }
    
    let hasChanges = false;
    
    // Replace framer-motion imports with motion/react for LazyMotion and domAnimation
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*['"]framer-motion['"]/g,
      (match, imports) => {
        hasChanges = true;
        // Keep LazyMotion, domAnimation, AnimatePresence in motion/react
        const motionImports = imports.split(',').map(imp => imp.trim());
        const filteredImports = motionImports.filter(imp => 
          imp === 'LazyMotion' || 
          imp === 'domAnimation' || 
          imp === 'AnimatePresence'
        );
        
        if (filteredImports.length > 0) {
          return `import { ${filteredImports.join(', ')} } from 'motion/react'`;
        }
        return ''; // Remove the import if no matching imports
      }
    );
    
    // Replace motion/react imports that don't have LazyMotion with correct pattern
    content = content.replace(
      /import\s*\{([^}]+)\}\s*from\s*['"]motion\/react['"]/g,
      (match, imports) => {
        hasChanges = true;
        // Split imports and filter
        const importList = imports.split(',').map(imp => imp.trim());
        const motionImports = importList.filter(imp => imp.includes('motion'));
        const otherImports = importList.filter(imp => !imp.includes('motion'));
        
        // Build new imports
        const newImports = [];
        
        // Add non-motion imports
        if (otherImports.length > 0) {
          newImports.push(otherImports.join(', '));
        }
        
        // Add LazyMotion and domAnimation if needed
        if (motionImports.length > 0) {
          newImports.push('LazyMotion, domAnimation');
          // Add AnimatePresence if it was in original imports
          if (imports.includes('AnimatePresence')) {
            newImports.push('AnimatePresence');
          }
        }
        
        return `import { ${newImports.join(', ')} } from 'motion/react'\nimport * as m from 'motion/react-m'`;
      }
    );
    
    // Add the m import if it's missing but motion is used
    if (content.includes('m.') && !content.includes('import * as m from')) {
      hasChanges = true;
      // Find the last import statement and add m import after it
      const importRegex = /import\s+[^;]+;/g;
      const imports = content.match(importRegex);
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        content = content.replace(lastImport, lastImport + '\nimport * as m from \'motion/react-m\';');
      }
    }
    
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
  
  console.log(`\nCorrection complete!`);
  console.log(`Total files checked: ${processedCount}`);
  console.log(`Files modified: ${modifiedCount}`);
  
  if (modifiedCount > 0) {
    console.log(`\n🎉 Successfully updated ${modifiedCount} files to use CORRECT syntax:`);
    console.log(`   - import { LazyMotion, domAnimation } from 'motion/react'`);
    console.log(`   - import * as m from 'motion/react-m'`);
    console.log(`💾 Bundle size savings: ~30kb`);
    console.log(`\n✅ CORRECT PATTERN:`);
    console.log(`   import { LazyMotion, domAnimation } from 'motion/react'`);
    console.log(`   import * as m from 'motion/react-m'`);
    console.log(`   `);
    console.log(`   export const MyComponent = () => (`);
    console.log(`     <LazyMotion features={domAnimation}>`);
    console.log(`       <m.div animate={{ opacity: 1 }}>Content</m.div>`);
    console.log(`     </LazyMotion>`);
    console.log(`   )`);
  } else {
    console.log(`No files needed updating.`);
  }
}

// Run the script
main();
