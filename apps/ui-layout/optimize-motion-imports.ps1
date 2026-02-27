# Script to optimize motion/react imports to use LazyMotion with m
# This saves ~30kb in bundle size

Write-Host "Starting motion/react import optimization..." -ForegroundColor Green

# Get all TypeScript/JavaScript files that import from motion/react
$files = Get-ChildItem -Path "." -Filter "*.tsx" -Recurse | Where-Object { 
    $_.FullName -notlike "*node_modules*" -and 
    $_.FullName -notlike "*\.next*" -and 
    $_.FullName -notlike "*dist*" -and
    $_.FullName -notlike "*build*"
}

# Also check .ts files
$files += Get-ChildItem -Path "." -Filter "*.ts" -Recurse | Where-Object { 
    $_.FullName -notlike "*node_modules*" -and 
    $_.FullName -notlike "*\.next*" -and 
    $_.FullName -notlike "*dist*" -and
    $_.FullName -notlike "*build*"
}

Write-Host "Found $($files.Count) files to check" -ForegroundColor Yellow

$processedCount = 0
$modifiedCount = 0

foreach ($file in $files) {
    $processedCount++
    
    # Read file content
    $content = Get-Content $file.FullName -Raw
    
    # Store original content to check if changes were made
    $originalContent = $content
    
    # Check if file imports from motion/react
    if ($content -match "from ['\"]motion/react['\"]") {
        
        # Replace the import statement
        $content = $content -replace "import\s*\{[^}]*motion[^}]*\}\s*from\s*['\"]motion/react['\"]", "import { LazyMotion, m, domAnimation } from 'framer-motion'"
        
        # Replace motion. with m.
        $content = $content -replace "\bmotion\.", "m."
        
        # Wrap the component with LazyMotion if not already wrapped
        # This is a simplified approach - you may need to manually adjust some files
        if ($content -match "export.*function.*component" -or $content -match "export.*const.*component") {
            # Add LazyMotion wrapper at the beginning of the return statement
            $content = $content -replace "(return\s*\()", "return ("
            $content = $content -replace "(return\s*\()", "return ("
            
            # Find the main return statement and wrap it
            if ($content -match "return\s*\(") {
                $content = $content -replace "(return\s*\()", "return (`n    <LazyMotion features={domAnimation}>`n      "
                
                # Find the closing of the return statement and add closing LazyMotion tag
                # This is a simplified approach - complex components may need manual adjustment
                $lines = $content -split "`n"
                $inReturn = $false
                $braceCount = 0
                $modifiedLines = @()
                
                foreach ($line in $lines) {
                    if ($line -match "return\s*\(") {
                        $inReturn = $true
                        $modifiedLines += $line
                    } elseif ($inReturn -and $line -match "^\s*\)\s*;?\s*$") {
                        if ($braceCount -eq 0) {
                            $modifiedLines += "    </LazyMotion>`n  )"
                            $inReturn = $false
                        } else {
                            $modifiedLines += $line
                            $braceCount--
                        }
                    } elseif ($inReturn) {
                        $modifiedLines += $line
                        # Count opening and closing braces
                        $openBraces = ($line | Select-String -Pattern "\{" -AllMatches).Matches.Count
                        $closeBraces = ($line | Select-String -Pattern "\}" -AllMatches).Matches.Count
                        $braceCount += ($openBraces - $closeBraces)
                    } else {
                        $modifiedLines += $line
                    }
                }
                
                $content = $modifiedLines -join "`n"
            }
        }
        
        # Only write back if content changed
        if ($content -ne $originalContent) {
            Set-Content $file.FullName -Value $content -NoNewline
            $modifiedCount++
            Write-Host "✓ Modified: $($file.Name)" -ForegroundColor Green
        }
    }
    
    # Show progress
    if ($processedCount % 20 -eq 0) {
        Write-Host "Progress: $processedCount/$($files.Count) files checked" -ForegroundColor Cyan
    }
}

Write-Host "`nOptimization complete!" -ForegroundColor Green
Write-Host "Total files checked: $processedCount" -ForegroundColor Yellow
Write-Host "Files modified: $modifiedCount" -ForegroundColor Yellow

Write-Host "`nNote: Some complex components may need manual adjustment to properly wrap with LazyMotion." -ForegroundColor Yellow
Write-Host "Please review the modified files and test the functionality." -ForegroundColor Yellow
