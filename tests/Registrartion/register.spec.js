import {test,expect} from '@playwright/test'

test('User Registration',async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    await page.click('[class="ico-register"]')
   
    let FirstName="Harshi"
    let LastName =	"Meduri"
    let Email = "harshi765@gmail.com"
    let Password = "Test@123"
    let ConfirmPassword	= "Test@123"
    
    await page.locator('[value="M"]').check()
    await page.fill('#FirstName',FirstName)
    await page.fill('#LastName',LastName)
    await page.fill('#Email',Email)
    await page.fill('#Password',Password)
    await page.fill('#ConfirmPassword',ConfirmPassword)
    await page.click('[id="register-button"]')
    
    await expect(await page.locator('[class="result"]').textContent()).toContain("Your registration completed")
    console.log("Registration successful");
    await page.click('[value="Continue"]')

}) 