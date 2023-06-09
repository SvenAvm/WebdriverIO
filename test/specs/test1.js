/*

1. Go to https://www.google.com/
2. Search for “cheese”
3. Use assertion to compare the number of results to 777.
4.  The test should fail during the comparison with an assertion message "There is too much cheese on the internet".

*/

describe("Test 1 (Google)", () => {
    it('Open Google and close cookies', async () => {
        // Open URL
        await browser.url('https://www.google.com/');

        // Close Cookies
        await $('//*[@id="W0wltc"]/div').click();

        // Assert title
        await expect(browser).toHaveTitle("Google");
    });

    it('Type Cheese in search and click search', async () => {
        // Type Cheese to search bar
        await $("#APjFqb").addValue("Cheese");

        // Click Search
        await $("//body/div[1]/div[3]/form[1]/div[1]/div[1]/div[4]/center[1]/input[1]").click();
    });

    it('Assert search result number', async () => {
        // Check result count
        const resultCount = await $("#result-stats");

        // assert result count is 777
        await expect(resultCount).toHaveTextContaining("777", {message: "There is too much cheese on the internet"})
    });
});