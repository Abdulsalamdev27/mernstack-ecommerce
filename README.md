1. Create the project root folder
mkdir my-project
cd my-project
2. Create the server folder
mkdir server
cd server
3. Initialize Node.js
npm init -y
4. Create the src folder
mkdir src
5. Install production dependencies
npm install express cors dotenv mongoose morgan zod
6. Install TypeScript and development dependencies
npm install -D typescript tsx @types/node @types/express @types/cors @types/morgan
7. Create tsconfig.json
npx tsc --init

Example tsconfig.json:

{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "NodeNext",
    "moduleResolution": "NodeNext",

    "rootDir": "src",
    "outDir": "dist",

    "strict": true,
    "skipLibCheck": true,

    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
8. Create the entry file

Inside src, create:

touch src/server.ts

Project structure:

my-project/
└── server/
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    └── src/
        └── server.ts
create db file inside src
create a util and middleware folder
util folder contain all function always needed 
envlop file is in util for 

