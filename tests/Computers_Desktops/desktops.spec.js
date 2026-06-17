import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-login"]')

    let Email = "harshi765@gmail.com"
    let Password = "Test@123"

    //? lOGGING in
    await page.fill('[id="Email"]',Email)
    await page.fill('[id="Password"]',Password)
    await page.check('[id="RememberMe"]')
    await page.click('[value="Log in"]')

    //? Cliking on Computers
    await page.locator('//a[contains(text(),"Computers")]').first().hover()
    await page.locator('//a[contains(text(),"Desktops")]').first().click()
    await page.click('(//a[contains(text(),"Build your own computer")])[2]')

    //? Selecting processor from dropdown
    await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:"14"})


    //?Selecting a RAM from drop down
    await page.locator('[id="product_attribute_16_6_5"]').selectOption({value:"17"})

    //? Choosing HDD
    await page.click('[value="19"]')

    //?Chhosing OS
    await page.click('[value="21"]')
    await page.click('//input[@id="add-to-cart-button-16"]')

    //? validating the message
    await page.locator('//p[text()="The product has been added to your "]').waitFor()
    let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
    await expect(success).toContain('The product has been added')



    

}) 