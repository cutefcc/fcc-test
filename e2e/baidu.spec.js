const {Builder, By, Key, until} = require('selenium-webdriver');//引入驱动
(async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();//使用火狐
  let driver = await new Builder().forBrowser('chrome').build();//使用火狐
  try {
    await driver.get('http://www.baidu.com');//打开百度
    await driver.findElement(By.name('wd')).sendKeys('webdriver', Key.RETURN);//找到name属性等于wd的输入框，然后输入 ‘webdriver’ 再回车
    await driver.wait(until.titleIs('webdriver_百度搜索'), 1000);//等待一秒看网页标题是否是webdriver_百度搜索
  } finally {
    await driver.quit();
  }
})();