const {chromium} = require('playwright');
const {expect} = require('expect');
const {saveVideo} = require('playwright-video');

(async () => {

    const browser = await chromium.launch({headless:false, slowMo:50})
    const context = await browser.newContext()
    const page = await context.newPage()

    const capture = await saveVideo(page, 'SignIn.mp4');

    await page.goto('https://react-redux.realworld.io/#/login')

    await page.fill('input[type = "email"]', 'nerxtest@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'nerxtest')
    await page.click('form >> "Sign in"')

    await page.screenshot({path:'SignIn.png'})

    await page.waitForTimeout(5000)

    await capture.stop();


}) ()