import {test} from "@playwright/test"

test("leave", async({page})=>{
      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //?login  -> give correct details
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.click('//button[text()=" Login "]')

    //? Click on My Leave
    await page.click('//span[text()="Leave"]')
    await page.click('//a[text()="My Leave"]')
    
    let fromMonth="March"
    let fromYear=2026;
    let fromDate=12


    let toMonth="March"
    let toYear=2026
    let toDate=15


    let leaveType="US - Personal"

    //~ ###################################################SELECTING FROM DATE#######################################################
    
    //?Clicking on calender icon
    await page.click('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[1]')
    //? clicking on month
    await page.click('(//p[@class="oxd-text oxd-text--p"])[1]')

    //*********************************************************************** */
    //?Choose month
    let monLocators=await page.locator('//li[contains(@class,"oxd-calendar-dropdown--option")]').all()

    //? Iterating over all months to click on specific one
    for(let mon of monLocators){
        let txt=await mon.textContent()
       if(txt.includes(fromMonth)){
        await mon.click()
        break;
       }
    }
    
    //*********************************************************************** */
    //?Iterating Over all years to click on specific year
    let yearLocators=await page.locator('//li[contains(@class,"oxd-calendar-dropdown--option")]').all()
     for(let yr of yearLocators){
        let txt=await yr.textContent()
        if(txt.includes(fromYear)){
            await yr.click()
            break;
        }
     }

     //*********************************************************************** *
     //? Clicking on soecific date
     await page.locator(`//div[@class="oxd-calendar-date" and text()="${fromDate}"]`).click()
     await page.waitForTimeout(3000)

   //~ ###################################################SELECTING FROM DATE#######################################################

     //?Clicking on calender icon
    await page.click('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[2]')
    //? clicking on month
    await page.click('(//p[@class="oxd-text oxd-text--p"])[1]')

    //*********************************************************************** */
    //?Choose month
    let montLocators=await page.locator('//li[contains(@class,"oxd-calendar-dropdown--option")]').all()

    //? Iterating over all months to click on specific one
    for(let mon of montLocators){
        let txt=await mon.textContent()
       if(txt.includes(toMonth)){
        await mon.click()
        break;
       }
    }
    
    //*********************************************************************** */
    //?Iterating Over all years to click on specific year
    let yearsLocators=await page.locator('//li[contains(@class,"oxd-calendar-dropdown--option")]').all()
     for(let yr of yearsLocators){
        let txt=await yr.textContent()
        if(txt.includes(toYear)){
            await yr.click()
            break;
        }
     }

     //*********************************************************************** *
     //? Clicking on soecific date
     await page.locator(`//div[@class="oxd-calendar-date" and text()="${toDate}"]`).click()
     await page.waitForTimeout(3000)


     //************************************************************************** */
     //? Selecting the type of leave
     await page.locator('//div[text()="-- Select --"]').click()
     await page.locator('//span[text()="US - Personal"]').click()
     await page.locator('//button[text()=" Search "]').click()


     await page.locator()

})