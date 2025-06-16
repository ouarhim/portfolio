const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const compressImage = async (inputPath, quality = 80) => {
  try {
    const fileExtension = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath);

    if (fileExtension === '.jpeg' || fileExtension === '.jpg') {
      sharpInstance = sharpInstance.jpeg({ quality: quality });
    } else if (fileExtension === '.png') {
      sharpInstance = sharpInstance.png({ quality: quality });
    } else {
      console.log(`Skipping unsupported file format: ${path.basename(inputPath)}`);
      return;
    }

    const tempOutputPath = inputPath + '.temp';
    await sharpInstance.toFile(tempOutputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(tempOutputPath).size;
    const savings = ((originalSize - compressedSize) / originalSize * 100).toFixed(2);
    
    fs.unlinkSync(inputPath); // Delete original file
    fs.renameSync(tempOutputPath, inputPath); // Rename compressed file to original name
    
    console.log(`Compressed ${path.basename(inputPath)}: ${savings}% smaller`);
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error);
  }
};

const processDirectory = async (directoryPath) => {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const inputPath = path.join(directoryPath, file);
    const stats = fs.statSync(inputPath);
    
    if (stats.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(inputPath);
    } else if (stats.isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      await compressImage(inputPath);
    }
  }
};

// Directories to process
const directoriesToProcess = [
  'src/bookcover' // Only targeting bookcover as requested
];

// Process all directories
const processAllDirectories = async () => {
  for (const dir of directoriesToProcess) {
    console.log(`\nProcessing directory: ${dir}`);
    await processDirectory(dir);
  }
};

processAllDirectories().catch(console.error); 