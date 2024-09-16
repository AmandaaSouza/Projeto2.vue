const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDirectory = path.join(__dirname, 'src/assets/images');
const outputDirectory = path.join(__dirname, 'public/images');

// Verifique se o diretório de saída existe; se não, crie-o
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory, { recursive: true });
}

// Ler o diretório de entrada
fs.readdir(inputDirectory, (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }

  if (!files || files.length === 0) {
    console.log('Nenhum arquivo encontrado no diretório.');
    return;
  }


  if (!err){
    
  files.forEach(file => {
    const inputFilePath = path.join(inputDirectory, file);
    const outputFilePath = path.join(outputDirectory, file);

    sharp(inputFilePath)
      .resize(800) // Exemplo de redimensionamento
      .toFormat('webp') // Exemplo de conversão de formato
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error(`Erro ao processar ${file}:`, err);
          return;
        }
        console.log(`Otimizado ${file}: ${info}`);
      });
  });
  }

});

