import puppeteer from "puppeteer";

export default function handler(req, res) {
  const { query } = req;
  const { id } = query;

  (async () => {
    return new Promise(async (resolve) => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto("http://www.wallet.sbowork.org.in/");

      // Type into search box
      await page
        .type("#wrapper > div > form > label > input", `${id}`)
        .then(() => page.keyboard.press("Enter"));

      // Locate the elements
      const workingWalletElement =
        "#wrapper > div > div.walletbox > ul > li:nth-child(2) > h3";
      const nonWorkingWalletElement =
        "#wrapper > div > div.walletbox > ul > li:nth-child(1) > h3";

      // Get the content needed
      const textSelector1 = await page.waitForSelector(workingWalletElement);
      const workingWallet = await textSelector1.evaluate(
        (el) => el.textContent
      );

      const textSelector2 = await page.waitForSelector(nonWorkingWalletElement);
      const nonWorkingWallet = await textSelector2.evaluate(
        (el) => el.textContent
      );

      const response = {
        workingWallet: `${workingWallet}`,
        nonWorkingWallet: `${nonWorkingWallet}`,
      };

      // close the instance
      browser.close();

      // return the response
      res.status(200).json(response);

      return resolve();
    });
  })();
}
