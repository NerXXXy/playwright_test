const {chromium} = require('playwright');


(async () => {
    const browser = await chromium.launch({headless:false})
    //const context = await  browser.newContext()
    //const page = await context.newPage()
    const page = await browser.newPage()       // 1 line instead of 2
    await page.goto('https://www.github.com')  //write any website you need to do screenshot
    await page.screenshot({path:`todo.png`})
    await browser.close()

}) ()