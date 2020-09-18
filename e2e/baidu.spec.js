//引入驱动
const { Builder, By, Key, until } = require("selenium-webdriver");
(async function example() {
  //使用火狐
  //let driver = await new Builder().forBrowser('firefox').build();
  //使用谷歌
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://www.baidu.com"); // 打开百度
    // 找到name属性等于wd的输入框，然后输入 ‘webdriver’ 再回车
    await driver.findElement(By.name("wd")).sendKeys("webdriver", Key.RETURN);
    // 看网页标题是否是webdriver_百度搜索
    await driver.wait(until.titleIs("webdriver_百度搜索"), 1000);
  } finally {
    await driver.quit();
  }
})();

// (async function example() {
//   //使用火狐
//   //let driver = await new Builder().forBrowser('firefox').build();
//   //使用谷歌
//   let driver = await new Builder().forBrowser('chrome').build();
//   try {
//     await driver.get('https://maimai.cn/ent/v3/discover');// 打开人才银行
//     await driver.findElement(By.name('m')).sendKeys('10820006682');
//     await driver.findElement(By.name('p')).sendKeys('222222', Key.RETURN);
//   } finally {
//     // await driver.quit();
//   }
// })();
