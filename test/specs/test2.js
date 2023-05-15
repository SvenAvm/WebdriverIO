// https://demoqa.com/
// Click on the Widgets card
// - Click on the Tool Tips link on the left-hand side in the Widgets section.
// - Hover over the “Hover me to see” button
// - Use Assertion to compare the tooltip text with “You hovered over the Button”.

// tooltip = //body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]


describe("Test 2 (DemoQA)", () => {
    it('Open DemoQA', async () => {
        // Open URL
        await browser.url('https://demoqa.com/');

        // Assert title
        await expect(browser).toHaveTitle("DEMOQA");
    })

    it('Click on the Widgets card', async () => {
        // Click widgets card
        await $("//body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]").click();
    })

    it('Click on the Tool Tips link on the left-hand side in the Widgets section.', async () => {
        // Click Tooltips
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Hover over the “Hover me to see” button and assert text', async () => {
        // Hover over the “Hover me to see” button and assert text
        await browser.elementHover("//button[@id='toolTipButton']");
        await expect("//button[@id='toolTipButton']").toHaveTextContaining("Hover me to see")
    })
});