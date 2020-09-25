# webpack配置

## 简单webpack从0搭建

package.json
```
   {
  "name": "webpackStudy",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --config  config/webpack.dev.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^4.5.0",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-merge": "^4.2.2",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {}
}

  },
```

新建config

