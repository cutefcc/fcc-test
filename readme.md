
# 单元测试、e2e测试、UI测试、service接口测试

#### 单元测试

- 目的: 单元测试能够让开发者明确知道代码结果

- 适用于公司或者项目的 公用库、公用函数、任何公用的一小块东西

- 可以生成报告、覆盖率。可以很方便的看见测试结果

- [karma](https://karma-runner.github.io/latest/intro/installation.html) 官网

- 安装依赖：
```shell
  npm install karma --save-dev
  npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
  npm install -g karma-cli
```
- 配置karma：`karma init karma.conf.js`
```shell
    liuhao@localhost  ~/Documents/admin/one-more/fcc-test  karma init karma.conf.js
    
    Which testing framework do you want to use ?
    Press tab to list possible options. Enter to move to the next question.
    > jasmine
    
    Do you want to use Require.js ?
    This will add Require.js plugin.
    Press tab to list possible options. Enter to move to the next question.
    > no
    
    Do you want to capture any browsers automatically ?
    Press tab to list possible options. Enter empty string to move to the next question.
    > Chrome
    > 
    
    What is the location of your source and test files ?
    You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
    Enter empty string to move to the next question.
    > 
    
    Should any of the files included by the previous patterns be excluded ?
    You can use glob patterns, eg. "**/*.swp".
    Enter empty string to move to the next question.
    > 
    
    Do you want Karma to watch all the files and run the tests on change ?
    Press tab to list possible options.
    > yes
    
    
    Config file generated at "/Users/liuhao/Documents/admin/one-more/fcc-test/karma.conf.js".
```

- 接着配置 karma 的配置文件 `karma init my.conf.js`

  - 在这里可以通过 上下箭头选择断言库比如：
    - Jasmine mocha qunit nodeunit nunit
  - 这里我选择 jasmine ，接着`Do you want to use Require.js ?`选择 `no`
  - 接着是选择浏览器(无头浏览器，就是没有GUI界面的浏览器) 也可以选择 Chrome
    - Chrome ChromeHeadless ChromeCanary Firefox Safari PhantomJS Opera IE

- 看见`Config file generated at "/Users/qitmac000352/Documents/admin/yideng/2018.11.06/qatest/my.conf.js".`就表示 karma 的基本配置文件就已经生成了 

- 接着在 `package.json` 里面加上运行 karma 的测试命令：

- ```javascript
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "unit": "karma start my.conf.js"
    },
  ```

- `my.conf.js` 里的 singleRun 必须设置为 true （保证能在无头浏览器里面运行）

- 接着指定开发的项目文件 和 测试文件(`my.conf.js里面的files 字段`)：

  - `*`: 匹配0到多个字符，如果用于路径匹配，只匹配一级目录。 
    `**`: 一般用于路径匹配，**匹配多级目录**。

- ```javascript
     // list of files / patterns to load in the browser
      files: [
        "./unit/**/*.js", //指定 被测试的文件
        "./unit/**/*.spec.js" //指定 测试文件
      ],
  ```

- 接着就可以写测试脚本了，通常，测试脚本与所要测试的源码脚本同名，但是后缀名为`.test.js`（表示测试）或者`.spec.js`

- ```javascript
  describe('加法函数的测试', function() {
    it("1 加 1应该等于2", function() {
      expect(window.add(1)).toBe(2);
    });
  });
  ```

- 上面这段代码，就是测试脚本，测试脚本里面应该包括一个或多个`describe`块，每个`describe`块应该包括一个或多个`it`块。

  `describe`块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。

  `it`块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。

- 接着就可以运行命令 `npm run unit` 去执行这个单元测试了，这里可能会报很多错，需要安装的包有以下：

- ```javascript
    "devDependencies": {
      "jasmine-core": "^3.3.0",
      "karma": "^3.1.1",
      "karma-chrome-launcher": "^2.2.0",
      "karma-coverage": "^1.1.2",
      "karma-jasmine": "^1.1.2",
      "karma-phantomjs-launcher": "^1.0.4"
    },
  ```

- 配置好之后，再 `npm run unit` 就可以检查 **覆盖率**了(`karma-coverage`)，报表生成在  `dir : 'docs/coverage/'`下面，使用浏览器打开就可以看见报表了

- 使用 chrome 的配置文件如下：

- ```javascript
    // Karma configuration
    // Generated on Mon Jun 01 2020 22:57:07 GMT+0800 (GMT+08:00)
    
    module.exports = function(config) {
      config.set({
    
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',
    
    
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],
    
    
        // list of files / patterns to load in the browser
        files: [
          "./unit/**/*.js",
          "./unit/**/*.spec.js"
        ],
    
    
        // list of files / patterns to exclude
        exclude: [
        ],
    
    
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
          'unit/**/*.js': ['coverage']
        },
    
    
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress','coverage'],
    
        // optionally, configure the reporter
        coverageReporter: {
          type : 'html',
          dir : 'docs/coverage/'
        },
        // web server port
        port: 9876,
    
    
        // enable / disable colors in the output (reporters and logs)
        colors: true,
    
    
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,
    
    
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
    
    
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],
    
    
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,
    
        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        plugins: [
          'karma-jasmine',
          'karma-chrome-launcher',
          'karma-coverage'
        ]
    
      })
    }
    
    ```

- `package.json` 如下

- ```json
    {
      "name": "fcc-test",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "unit": "karma start karma.conf.js"
      },
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "jasmine-core": "^3.5.0",
        "karma": "^5.0.9",
        "karma-chrome-launcher": "^3.1.0",
        "karma-coverage": "^2.0.2",
        "karma-jasmine": "^3.3.1"
      }
    }
    ```


#### e2e 测试(End-to-End Testing)

- 测试整个软件产品的流程是否符合预期，通过模拟真实用户使用场景去验证系统是否正确

- 先安装  `npm install selenium-webdriver --save-dev`

- [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)要想调起浏览器得先安装驱动， 比如火狐的：`[geckodriver(.exe)]` google的 `[chromedriver(.exe)]`，当然电脑上要有对应的浏览器，下载下来的驱动要放在项目根目录

- driver 必须下载和本机浏览器版本相匹配才行 （chrome的驱动：https://chromedriver.chromium.org/）

- [调用相关的api执行想要的操作](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_By.html)

- 下面写一个简单的 e2e 脚本

- ```javascript
  //引入驱动
  const {Builder, By, Key, until} = require('selenium-webdriver');
  (async function example() {
    //使用火狐
    //let driver = await new Builder().forBrowser('firefox').build();
    //使用谷歌
    let driver = await new Builder().forBrowser('chrome').build();
    try {
      await driver.get('http://www.baidu.com');// 打开百度
      // 找到name属性等于wd的输入框，然后输入 ‘webdriver’ 再回车
      await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);
      // 等待一秒看网页标题是否是webdriver_百度搜索
      await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);
    } finally {
      await driver.quit();
    }
  })();
  ```

- 运行代码 ：就可以看见浏览器自己在跑了，**如果成功没有任何提示，如果报错，直接报在终端，没有生成报告**

- ```javascript
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "unit": "karma start my.conf.js",
      "e2e": "node ./e2e/baidu.spec.js"
    },
  ```

#### UI自动化
- 待补充

#### service端测试（接口测试）

- 接口测试 service 端要用到 mocha：是专门测试异步api

-  `npm install --save-dev mocha`  `npm install --save-dev mochawesome`

-  mochawesome 是用来生成报告的

- 接口测试难点主要

  - 前期测试数据的搜集（入参多个，多种情况），入参数和测试case分离，保证扩展性

  - 后续case的持续维护

- 需要配置一个 mochaRunner.js (里面写你的测试代码)

- ```javascript
  const Mocha = require('mocha')
  const mocha = new Mocha({
      reporter: 'mochawesome',
      reporterOptions: {
          reportDir: './docs/mochawesome-report'
      }
  })
  
  mocha.addFile('./service/api.spec.js')
  mocha.run(function() {
      console.log('done')
      process.exit()
  })
  ```

- 本地简单启动一个服务app.js：

- ```javascript
  const Koa = require('koa');
  const app = new Koa();
  
  app.use(async ctx => {
    if (ctx.path === '/test') {
      const res = {data: 'Hello World1'}
      ctx.body = res;
    }
  })
  
  app.listen(3000, () => {
    console.log('🚀3000')
  })
  ```

- Api.spec.js

- ```javascript
  const fetch = require('cross-fetch');
  
  describe("接口测试", function () {
    it("node🎬接口", function (done) {
      fetch('http://localhost:3000/test')
        .then(function(response) {
          return response.json();
        })
        .then(function(res) {
          if (res.data === 'Hello World') {
            done()
          } else {
            done(new Error('数据格式错误🙅‍♂️'))
          }
        })
        .catch(err => {
          done(err)
        });
    })
  })
  ```

- 到目前为止的 package.json 文件如下所示

- ```javascript
  {
    "name": "test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "npm run unit && npm run e2e",
      "unit": "karma start my.conf.js",
      "e2e": "node ./e2e/baidu.spec.js",
      "ui": "backstop test",
      "service": "node ./mochaRunner.js"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "express": "^4.16.4",
      "jasmine-core": "^3.3.0",
      "karma": "^3.1.1",
      "karma-coverage": "^1.1.2",
      "karma-jasmine": "^1.1.2",
      "karma-phantomjs-launcher": "^1.0.4",
      "mocha": "^5.2.0",
      "mochawesome": "^3.1.1",
      "selenium-webdriver": "^4.0.0-alpha.1"
    },
    "dependencies": {
      "axios": "^0.18.0"
    }
  }
  ```

- `npm run service` 接口测试报表就出来了

- 目前为止：单元测试、e2e测试、ui测试、接口测试就都完成了，其中单元测试、ui测试、接口测试 都生成了小报表

- 可以一个命令执行完所有的测试: `npm run test`
```json
  "scripts": {
    "test": "npm run unit && npm run e2e && npm run ui && npm run service",
    "unit": "karma start my.conf.js",
    "e2e": "node ./e2e/baidu.spec.js",
    "ui": "backstop test",
    "service": "node ./mochaRunner.js"
  },
```

