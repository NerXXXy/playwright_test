const {chromium} = require('playwright');
const {expect} = require('expect');

(async () =>{


    const browser = await chromium.launch({ headless:false , slowMo:50})
    const context = await browser('https://react-redux.realworld.io/#/login.newContext()')
    const page = await context.newPage()

    await page.goto('')
    const title = await page.title()
    expect(title).toBe('Conduit')

    await page.fill('input[type = "email"]', 'nerxtest@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'nerxtest')
    await page.click ('form >> "Sign in"')

    await page.click('a >> "New Post"')
    const url = await page.url()
    expect(url).toContain('editor')


    await page.goBack()
    await page.waitForTimeout(2000)

    await page.goForward()
    await page.waitForTimeout(2000)


    await page.reload()

    await browser.close()
}) ()