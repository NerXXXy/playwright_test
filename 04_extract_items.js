//get something from element

const {chromium} = require('playwright');

(async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]' ,'nerxtest@gmail.com' )
    await page.press('input[type = "email"]' , 'Tab')
    await page.type('input[type = "password"]', 'nerxtest')
    await page.click('form >> "Sign in"')

    await page.waitForTimeout(5000)

    const logoText = await page.$eval('.navbar-brand' , el => el.innerText)
    console.log('Logo text: ' + logoText)

    const logoHref = await page.$eval('.navbar-brand' , el => el.href)
    console.log('Logo href: ' + logoHref)

    const popularTagsCount = await page.$$eval('.tag-default', el => el.length)
    console.log('Popular tags: ' + popularTagsCount)

    await browser.close()


}) ()