### 单元测试 unit

依赖说明：
    "jasmine-core": "^3.5.0",
    "karma": "^5.0.9",
    "karma-chrome-launcher": "^3.1.0",
    "karma-coverage": "^2.0.2",
    "karma-jasmine": "^3.3.1"

- jasmine-core、karma-jasmine 是和断言库相关
- karma-coverage 测试覆盖率
- karma-chrome-launcher 浏览器
- 跑完有报表

### e2e 测试
- selenium-webdriver 自动化测试
- 跑完没有报表

### servce 测试
- mocha 测试异步api
- mochawesome Mochawesome is a custom reporter for use with the Javascript testing framework, mocha

- 可以吧mocha 继承到karma里面去