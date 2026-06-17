import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{

    //? Logging intyo application
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-login"]')
    let Email ="harshi765@gmail.com"
    let Password = "Test@123"
    await page.fill('[id="Email"]',Email)
    await page.fill('[id="Password"]',Password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')

    await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)
    //?Go to books category
    await page.click('//ul[@class="top-menu"]/li/a[@href="/books"]')

    await page.locator('//a[text()="Computing and Internet"]/ancestor::div[@class="details"]//input[@value="Add to cart"]').click()
    //? Targettiungv shopping cart
    let count = await page.locator('[class="cart-qty"]').textContent()


    let success = "The product has been added to your shopping cart"
    await page.locator('[id="bar-notification"]').waitFor({state:"visible"})
    await expect(await page.locator('[id="bar-notification"]').textContent()).toContain(success)

    //await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(count+1)
    if(await page.locator('[class="cart-qty"]').textContent()>count)
        console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());
        

}) 