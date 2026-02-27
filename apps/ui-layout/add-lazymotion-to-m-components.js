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

// Function to add LazyMotion to components that use m. but don't have it
function addLazyMotionToMComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Check if file uses m. but doesn't have LazyMotion
    if (!content.includes('m.') || content.includes('LazyMotion')) {
      return false; // No m. usage or already has LazyMotion
    }
    
    let hasChanges = false;
    
    // Check if imports include motion/react but not LazyMotion
    if (content.includes('from \'motion/react\'') && !content.includes('LazyMotion')) {
      // Add LazyMotion and domAnimation to existing motion/react import
      content = content.replace(
        /import\s*\{([^}]+)\}\s*from\s*['"]motion\/react['"]/g,
        (match, imports) => {
          hasChanges = true;
          const importList = imports.split(',').map(imp => imp.trim());
          
          // Add LazyMotion and domAnimation if not already present
          if (!importList.includes('LazyMotion')) {
            importList.push('LazyMotion');
          }
          if (!importList.includes('domAnimation')) {
            importList.push('domAnimation');
          }
          
          return `import { ${importList.join(', ')} } from 'motion/react'`;
        }
      );
    }
    
    // If no motion/react import exists, add it
    if (hasChanges || (!content.includes('from \'motion/react\'') && content.includes('m.'))) {
      // Find the last import statement and add motion/react import
      const importRegex = /import\s+[^;]+;/g;
      const imports = content.match(importRegex);
      
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        
        // Check if m import exists
        if (content.includes('import * as m from')) {
          // Add LazyMotion import before m import
          content = content.replace(
            lastImport,
            `import { LazyMotion, domAnimation } from 'motion/react';\n${lastImport}`
          );
        } else {
          // Add both imports
          content = content.replace(
            lastImport,
            `${lastImport}\nimport { LazyMotion, domAnimation } from 'motion/react';\nimport * as m from 'motion/react-m';`
          );
        }
        hasChanges = true;
      }
    }
    
    // Find component functions that use m. and wrap their return statements
    // This is a simplified approach - complex components may need manual adjustment
    if (hasChanges) {
      // Look for function components that return JSX with m.
      const functionRegex = /export\s+(?:function|const)\s+(\w+)[^{]*\{[\s\S]*?return\s*\(([\s\S]*?)\);?\s*\}/g;
      
      content = content.replace(functionRegex, (match, functionName, returnContent) => {
        if (returnContent.includes('m.') && !returnContent.includes('<LazyMotion')) {
          // Wrap the return content with LazyMotion
          const indent = returnContent.match(/^\s*/)[0];
          const wrappedReturn = `return (\n${indent}  <LazyMotion features={domAnimation}>\n${indent}    ${returnContent.trim()}\n${indent}  </LazyMotion>\n${indent});`;
          return match.replace(returnContent, wrappedReturn);
        }
        return match;
      });
    }
    
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
  
  console.log(`Found ${files.length} TypeScript files to check for LazyMotion...`);
  
  let modifiedCount = 0;
  let processedCount = 0;
  let needsManualReview = [];
  
  for (const file of files) {
    processedCount++;
    
    const result = addLazyMotionToMComponents(file);
    if (result === true) {
      modifiedCount++;
      console.log(`✓ Added LazyMotion: ${path.relative(rootDir, file)}`);
    } else if (result === 'manual') {
      needsManualReview.push(path.relative(rootDir, file));
    }
    
    // Show progress every 50 files
    if (processedCount % 50 === 0) {
      console.log(`Progress: ${processedCount}/${files.length} files processed`);
    }
  }
  
  console.log(`\nLazyMotion addition complete!`);
  console.log(`Total files checked: ${processedCount}`);
  console.log(`Files modified: ${modifiedCount}`);
  
  if (needsManualReview.length > 0) {
    console.log(`\n⚠️  Files that need manual review:`);
    needsManualReview.forEach(file => console.log(`   - ${file}`));
  }
  
  if (modifiedCount > 0) {
    console.log(`\n🎉 Successfully added LazyMotion to ${modifiedCount} files!`);
    console.log(`💾 Bundle size optimization: ~30kb`);
    console.log(`\n✅ OPTIMIZATION PATTERN:`);
    console.log(`   import { LazyMotion, domAnimation } from 'motion/react'`);
    console.log(`   import * as m from 'motion/react-m'`);
    console.log(`   `);
    console.log(`   export const Component = () => (`);
    console.log(`     <LazyMotion features={domAnimation}>`);
    console.log(`       <m.div animate={{ opacity: 1 }}>Content</m.div>`);
    console.log(`     </LazyMotion>`);
    console.log(`   )`);
    console.log(`\n⚠️  Note: Some complex components may need manual adjustment.`);
  } else {
    console.log(`No files needed LazyMotion addition.`);
  }
}

// Run the script
main();
