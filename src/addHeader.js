
/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/
// addHeader.js

import { promises as fsPromises } from 'fs';
import path from 'path';

const directoryPath = './'; // Cambia esto con la ruta de tu directorio

const header = `
/*
  Proyecto: [Ecommerce-TP-Info-2023]
  Autor: [José Luis Pauluk]
  Fecha: [26/12/2023]
  Descripción: [Proyecto Final Informatorio Diciembre 2023]
*/
`;

// Función para agregar el encabezado a un archivo
async function addHeaderToFile(filePath) {
  try {
    const data = await fsPromises.readFile(filePath, 'utf8');
    const contentWithHeader = header + data;

    await fsPromises.writeFile(filePath, contentWithHeader, 'utf8');
    console.log(`Encabezado agregado al archivo: ${filePath}`);
  } catch (err) {
    console.error(`Error al procesar el archivo ${filePath}: ${err}`);
  }
}

// Función recursiva para procesar todos los archivos en el directorio y sus subdirectorios
async function processFilesInDirectory(directory) {
  try {
    const files = await fsPromises.readdir(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = await fsPromises.stat(filePath);

      if (stats.isFile()) {
        await addHeaderToFile(filePath);
      } else if (stats.isDirectory()) {
        await processFilesInDirectory(filePath); // Llamada recursiva para procesar subdirectorios
      }
    }
  } catch (err) {
    console.error(`Error al leer el directorio ${directory}: ${err}`);
  }
}

// Ejecuta el procesamiento de archivos
processFilesInDirectory(baseDirectoryPath);