// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe("Udemy", () => {
    it('Open URL & Assert title', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/');

        //assert title
        await expect(browser).toHaveTitle("Practice E-Commerce Site – Automation Bro");
    })

    it('Open about page & Assert title', async () => {
        //Open URL
        await browser.url('https://practice.automationbro.com/about/');

        //assert title
        await expect(browser).toHaveUrl("https://practice.automationbro.com/about/");
    })

    it('Click get started btn and assert url contains text', async () => {
        //Open Homepage
        await browser.url('https://practice.automationbro.com/');

        // Click get started button
        await $("//span[contains(text(),'get started')]").click();

        //assert url contains text
        await expect(browser).toHaveUrlContaining("get-started");
    })
});