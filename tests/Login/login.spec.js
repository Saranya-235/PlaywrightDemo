import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-login"]')

    let Email = "harshi765@gmail.com"
    let Password = "Test@123"

    await page.fill('[id="Email"]',Email)
    await page.fill('[id="Password"]',Password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')
    

}) 