// build.js - Simple build script
const fs = require('fs');
const path = require('path');

console.log('🔨 Starting build process...');

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
  console.log('📁 Created dist directory');
}

// Files to copy
const filesToCopy = [
  'server.js',
  'package.json',
  'package-lock.json'
];

// Directories to copy
const dirsToCopy = [
  'routes',
  'controllers', 
  'public'
];

// Copy files
filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(distDir, file));
    console.log(`📄 Copied ${file}`);
  }
});

// Copy directories recursively
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

dirsToCopy.forEach(dir => {
  if (fs.existsSync(dir)) {
    copyDir(dir, path.join(distDir, dir));
    console.log(`📂 Copied ${dir}/ directory`);
  }
});

console.log('✅ Build completed successfully!');
console.log('📦 Build output: dist/ directory');