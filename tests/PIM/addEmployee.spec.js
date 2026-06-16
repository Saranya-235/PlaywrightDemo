import {expect, test} from "@playwright/test"
import path from "node:path"
test("add Employee", async({page})=>{
    //launch URl
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    let fName="Harshi"
    let mName="Sri"
    let lName="Meduri"
    //?login  -> give correct details
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.click('//button[text()=" Login "]')

    //?Check the dashboard is visible or not
    //? Click on PIM
    await page.click('//span[text()="PIM"]')
    await page.click("//a[text()='Add Employee']");

    await page.fill('[name="firstName"]', fName)
    await page.fill('[name="middleName"]',mName)
    await page.fill('[name="lastName"]', lName)

    await page.locator('[type="file"]').setInputFiles(path.join(__dirname,"../../uploading_Files/pwright.png"))

    await page.click('//button[text()=" Save "]')

    await page.waitForLoadState()
    // await page.locator('//h6[@class="oxd-text oxd-text--h6 --strong"]').waitFor({state:"visible"})
    // await expect (await page.locator('//h6[@class="oxd-text oxd-text--h6 --strong"]').textContent()).toBe(fName+" "+lName)



})