var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://localhost:9000');
driver.findElement(By.name('pma_username')).sendKeys('root');
driver.findElement(By.name('pma_password')).sendKeys('root1');
driver.findElement(By.id('input_go')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 9000);
// driver.quit();