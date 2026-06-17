import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-login"]')
    let Email = "mailto:aurora1234@gmail.com"
    let Password = "Test@123"
    await page.fill('[id="Email"]',Email)
    await page.fill('[id="Password"]',Password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')
        await expect(await page.locator('(//a[@class="account"])[1]').textContent()).toBe(Email)
    //search for laptop
    await page.fill('[name="q"]',"Laptop")
    await page.click('[value="Search"]')
    await expect(await page.locator('[class="product-title"]').textContent()).toContain("Laptop")
    console.log("Search result displays ",await page.locator('[class="product-title"]').textContent());


}) 