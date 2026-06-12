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
        
Create Database File

Inside the src folder, create a db folder to manage database connections.

src/
└── db/
    └── index.ts

The db folder contains all database configuration and connection logic.

Create Utility and Middleware Folders

Inside the src folder, create the following folders:

src/
├── db/
├── middleware/
└── util/
Utility Folder

The util folder contains reusable helper functions used throughout the application. Its purpose is to prevent repeating the same logic in multiple places (DRY – Don't Repeat Yourself).

Envelope Utility

Inside the util folder, create a file named envelope.ts.

src/
└── util/
    └── envelope.ts

The envelope.ts file provides a standardized structure for API responses.
envlop file is in util for 

create apperror file under util folder it help us to throw error from anywhere part of the code

AppError Utility

Create an apperror.ts file inside the util folder.

src/
└── util/
    ├── envelope.ts
    └── apperror.ts

The AppError utility provides a custom error class that can be thrown from any part of the application. It helps standardize error handling and allows error middleware to process errors consistently.

Async Handler Utility

Create an asyncHandler.ts file inside the util folder.

src/
└── util/
    ├── envelope.ts
    ├── apperror.ts
    └── asyncHandler.ts
Purpose

Express does not automatically catch errors thrown inside asynchronous route handlers. Without proper error handling, unhandled promise rejections can occur and errors may not reach the application's error middleware.

To solve this, we create an asyncHandler wrapper that catches asynchronous errors and forwards them to Express using next().

error Handler Middleware

Create errorHandler.ts inside the middleware folder.

Purpose

This middleware catches every error passed through Express and sends a standardized response to the client.

Not Found Middleware

Create notFound.ts inside the middleware folder.

Purpose

Handles requests to routes that do not exist.

Project Structure
src/
├── middleware/
│   ├── globalErrorHandler.ts
│   └── notFound.ts
└── util/
    ├── envelope.ts
    ├── apperror.ts
    ├── asyncHandler.ts
    └── errorHandler.ts










