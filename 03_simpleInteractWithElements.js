//interact with elements

const {chromium} = require('playwright');

(async () => {


    const browser = await chromium.launch({headless:false , slowMo:50})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://react-redux.realworld.io/#/login?_k=xwdw6s')


    await page.fill('input[type = "email"]', 'nerxtest@gmail.com')
    await page.press('input[type = "email"]', 'Tab')
    await page.type('input[type = "password"]', 'nerxtest', {delay:100})
    await page.focus('form >> "Sign in"')
    await page.click('form >> "Sign in"', {position:{x:0 , y:0} , button:'left', modifiers:['Shift'], force:true,timeout:45000})
    // await page.dbclick(' form >> "Sign in"')
    await page.click('a >> "New Post"', {delay:2000})

    const input = await page.$$('.form-group')
    await input[0].click()
    await input[0].type('Hello World' , {delay:30})
    await input[1].click()
    await input[1].type('This is my first long test!' , {delay:30})
    await input[2].click()
    await input[2].type('Fells good!' , {delay:30})
    await input[3].click()
    await input[3].type('#helloworld' , {delay:30})


    const post = await page.$('.btn')
    await post.click({delay: 2000})







}) ()