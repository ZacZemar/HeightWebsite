# To run this app, locate to the build directory 

### Table of Contents


1. [Installation](#installation)
2. [How to Run the App](#how-to-run-the-app)


### Installation

- Node.js and npm should be installed on the system. To do this

Linux: sudo apt update then sudo apt install nodejs npm
Mac: brew install node
Windows: choco install nodejs

Verify Installation with:
node -v
npm -v


- Install `http-server` globally to serve the `index.html` file:
  ```
  npm install -g http-server
  ```

### How to Run the App

1. Clone the repository or download the code and navigate to the project directory (In this case cd to the build folder).
2. Install the required dependencies:
   ```
   npm install (if it hasn't already been installed)
   ```
3. Build the React app for production:
   ```
   npm run build
   ```
4. Change directory to the `build` folder:
   ```
   cd build
   ```
5. Serve the app using `http-server`:
   ```
   http-server
   ```
6. Open a web browser and access the app using the provided local or network address (e.g., `http://localhost:8080`).

The production-ready build can be found in the `build` directory.
