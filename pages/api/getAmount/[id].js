const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const Key = webdriver.Key;
const By = webdriver.By;
const until = webdriver.until;

export default async function handler(req, res) {
  let workingWallet = -1;
  let nonWorkingWallet = -1;

  const { query } = req;

  const driver = await new webdriver.Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--headless"))
    .build();

  try {
    await driver.get("http://www.wallet.sbowork.org.in/index.php");
    driver.findElement(By.name("profileid")).sendKeys(query.id, Key.RETURN);

    workingWallet = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="wrapper"]/div/div[2]/ul/li[2]/h3')
        ),
        100
      )
      .getText();

    nonWorkingWallet = await driver
      .wait(
        until.elementLocated(
          By.xpath('//*[@id="wrapper"]/div/div[2]/ul/li[1]/h3')
        ),
        100
      )
      .getText();
  } finally {
    if (workingWallet == -1) workingWallet = "No Data Found";
    if (nonWorkingWallet == -1) nonWorkingWallet = "No Data Found";

    res.status(200).json({
      workingWallet: `${workingWallet}`,
      nonWorkingWallet: `${nonWorkingWallet}`,
    });
  }
  driver.quit();
}
