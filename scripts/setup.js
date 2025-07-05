#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Bettingator project...\n');

// Check Node version
const nodeVersion = process.version;
const requiredVersion = 'v20';
if (!nodeVersion.startsWith(requiredVersion)) {
  console.warn(`⚠️  Warning: Node.js ${requiredVersion}.x is recommended. You're using ${nodeVersion}\n`);
}

// Clean install
console.log('🧹 Cleaning previous installations...');
const folders = ['node_modules', '.parcel-cache', 'dist'];
folders.forEach(folder => {
  const folderPath = path.join(process.cwd(), folder);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`   ✓ Removed ${folder}`);
  }
});

// Remove lock file
const lockFile = path.join(process.cwd(), 'package-lock.json');
if (fs.existsSync(lockFile)) {
  fs.unlinkSync(lockFile);
  console.log('   ✓ Removed package-lock.json');
}

// Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('\n✅ Dependencies installed successfully!');
} catch (error) {
  console.error('\n❌ Failed to install dependencies');
  process.exit(1);
}

console.log('\n🎉 Setup complete! Run "npm run dev" to start the development server.');
console.log('\n📝 Available commands:');
console.log('   npm run dev     - Start development server');
console.log('   npm run build   - Build for production');
console.log('   npm run preview - Preview production build');
console.log('   npm run lint    - Run linting\n');