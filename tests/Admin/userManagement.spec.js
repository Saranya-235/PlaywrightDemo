import {test} from "@playwright/test"

test("add data", async({page})=>{
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[1]', "")
})