#   Configurar TypeScript

##  Instalacion Basica
    -   npm install -g typescript ( de manera global )
    -   tsc --init ->   Archivo de caracteristicas de Typescript TS.config.json

##  Ejecutar un archivo con extension *.ts
    -   COMANDO tsc "nombre del archivo" - Compila un archivo
    -   node src/"archivo".js

##  Ejecutando con DENO
    -   deno run "nombre del archivo".ts or "nombre del archivo".js nos sirve para evitar usar compilador

##  Compilar Multiples Archivos
    -   La ventaja del archivo TSCONFIG.JSON
    -   Configuramos:
        "outDir": "./dist",                                  /* Specify an output folder for all emitted files. */      1.  Ubicacion de archivos compilados a *.js
        "rootDir": "./src",                                  /* Specify the root folder within your source files. */    2.  Ubicacion de Archivos *.ts

### Buenas Practicas para envitar compilacion automatica
    -   en archivo tscofing.json
    -   "include" : [
        "src/**/*.ts"      1.  Archivos a incluir dentro del --watch ** significa carpetas anidadas dentro del directorio root ( src )
    ],
    "exclude" : [
        "src/test.ts"   1.  Archivos a excluir dentro del tsconfig.json
    ]