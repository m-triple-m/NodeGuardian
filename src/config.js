const app_config = {
  apiUrl: "http://localhost:5000",
  status: {
    login: {
      success: 201,
      fail: 401,
    },
  },
  options: {
    webApp: {
      fullstack: {
        mern: {
          frontend: {
            library: [
              {
                name: "React",
                icon: "fab fa-react",
                package: "react",
                category: "UI",
                dependencyPackages: ["react-dom", "react-scripts"],
              },
              {
                name: "Redux",
                icon: "fab fa-react",
                package: "redux",
                category: "Utility",
                dependencyPackages: [],
              },
              {
                name: "React-Redux",
                icon: "fab fa-react",
                package: "react-redux",
                category: "Utility",
                dependencyPackages: [],
              },
              {
                name: "React-Router",
                icon: "fab fa-react",
                package: "react-router-dom",
                category: "Routing",
                dependencyPackages: [],
              },
              {
                name: "Formik",
                icon: "fab fa-react",
                package: "formik",
                category: "Form Handling",
                dependencyPackages: [],
              },
              {
                name: "Yup",
                icon: "fab fa-react",
                package: "yup",
                category: "Form Handling",
                dependencyPackages: [],
              },
              {
                name: "Sweetalert 2",
                icon: "fab fa-react",
                package: "sweetalert2",
                category: "UI",
                dependencyPackages: ["sweetalert2-react-content"],
              },
              {
                name: "Framer Motion",
                icon: "fab fa-react",
                package: "framer-motion",
                category: "UI",
                dependencyPackages: ["sweetalert2-react-content"],
              },
              {
                name: "React-Bootstrap",
                icon: "fab fa-react",
                package: "react-bootstrap",
                dependencyPackages: ["bootstrap", "react-router-dom"],
              },
              {
                name: "React-Toastify",
                icon: "fab fa-react",
                package: "react-toastify",
                dependencyPackages: [],
              },
              {
                name: "React-Icons",
                icon: "fab fa-react",
                package: "react-icons",
                dependencyPackages: [],
              },
              {
                name: "React-Select",
                icon: "fab fa-react",
                package: "react-select",
                dependencyPackages: [],
              },
              {
                name: "React-Datepicker",
                icon: "fab fa-react",
                package: "react-datepicker",
                dependencyPackages: [],
              },
              {
                name: "React-Table",
                icon: "fab fa-react",
                package: "react-table",
                dependencyPackages: [],
              },
              {
                name: "React-Loading",
                icon: "fab fa-react",
                package: "react-loading",
                dependencyPackages: [],
              },
              {
                name: "React-Loading-Overlay",
                icon: "fab fa-react",
                package: "react-loading-overlay",
                dependencyPackages: [],
              },
              {
                name: "React-Loading-Skeleton",
                icon: "fab fa-react",
                package: "react-loading-skeleton",
                dependencyPackages: [],
              },
              {
                name: "React-Image-Upload-Component",
                icon: "fab fa-react",
                package: "react-image-upload-component",
                dependencyPackages: [],
              },
              {
                name: "React-Image-Crop",
                icon: "fab fa-react",
                package: "react-image-crop",
                dependencyPackages: [],
              },
              {
                name: "React-Image-Gallery",
                icon: "fab fa-react",
                package: "react-image-gallery",
                dependencyPackages: [],
              },
              {
                name: "React-Image-File-Resizer",
                icon: "fab fa-react",
                package: "react-image-file-resizer",
                dependencyPackages: [],
              },
            ],
            files: [
              {
                name: "index.js",
                path: "src",
                content: `import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));`,
              },
              {
                name: "App.js",
                path: "src",
                content: `import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>React Application</h1>
        </div>
    );
}

export default App;`,
              },
              {
                name: "index.css",
                path: "src",
                content: "",
              },
              {
                name: "App.css",
                path: "src",
                content: "",
              },
              {
                name: "package.json",
                path: "",
                content: `{
    "name": "react-app",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "react": "^17.0.1",
        "react-dom": "^17.0.1",
        "react-scripts": "4.0.1",
        "web-vitals": "^0.2.4"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
}`,
              },
              {
                name: "README.md",
                path: "",
                content: "",
              },
              {
                name: "index.html",
                path: "public",
                content: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"  
            content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>React App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>`,
              },
              {
                name: "manifest.json",
                path: "public",
                content: `{
    "short_name": "React App",
    "name": "Create React App Sample",
    "icons": [
        {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
        },
        {
            "src": "logo192.png",
            "type": "image/png",
            "sizes": "192x192"
        },
        {
            "src": "logo512.png",
            "type": "image/png",
            "sizes": "512x512"
        }
    ],
    "start_url": ".",
    "display": "standalone",
    "theme_color": "#000000",
    "background_color": "#ffffff"
}`,
              },
              {
                name: "robots.txt",
                path: "public",
                content: `User-agent: *
Disallow:`,
              },
            ],
          },
          backend: {
            library: [
              {
                name: "Express",
                icon: "fab fa-node-js",
                package: "express",
              },
              {
                name: "Mongoose",
                icon: "fab fa-node-js",
                package: "mongoose",
              },
              {
                name: "Cors",
                icon: "fab fa-node-js",
                package: "cors",
              },
              {
                name: "Dotenv",
                icon: "fab fa-node-js",
                package: "dotenv",
              },
              {
                name: "Express-Fileupload",
                icon: "fab fa-node-js",
                package: "express-fileupload",
              },
              {
                name: "Express-Validator",
                icon: "fab fa-node-js",
                package: "express-validator",
              },
            ],
          },
          mean: {
            frontend: {},
            backend: {},
          },
          frontend: {},
          backend: {},
        },
        mevn: {},
        mean: {},
        pern: {},
        fern: {},
      },
    },
    mobileApp: {
      "react-native": {},
      ionic: {},
      "native-script": {},
    },
    desktopApp: {
      electron: {},
      nwjs: {},
    },
    plugin: {
      photoshop: {},
      illustrator: {},
      "after-effects": {},
      premiere: {},
    },
    extension: {
      browser: {},
      desktop: {},
    },
  },
};

export default app_config;