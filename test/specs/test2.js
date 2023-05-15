/*

1. Navigate to https://demoqa.com/
2. Click on the Widgets card
3. Click on the Tool Tips link on the left-hand side in the Widgets section.
4. Hover over the “Hover me to see” button
5. Use Assertion to compare the tooltip text with “You hovered over the Button”.

*/

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
        const btnToHover = $("//button[@id='toolTipButton']")

        await btnToHover.moveTo()
        await expect(btnToHover).toHaveTextContaining("Hover me to see")
        await browser.pause(100)
    })
});