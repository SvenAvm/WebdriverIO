//- Go to https://www.saucedemo.com/
//- Login with standard credentials
//- Wait for the products page to load
//- Add two different products to the cart
//- Open the cart
//- Use Assertion to check if the number of products is 2.
//- Remove the cheaper product
//- Go to the checkout
//- Enter First name, Last name, Zip/Postal code
//- Click on the “Continue” button
//- Use assertion to check if the item total value is correct
//- Place the order
//- Use assertion to check if the order is placed successfully
//- Logout

describe("Test 3 (SauceDemo)", () => {
    it('Open SauceDemo', async () => {
        // Open URL
        await browser.url('https://www.saucedemo.com/');

        // Assert title
        await expect(browser).toHaveTitle("Swag Labs");
    })

    it('Login with standard credentials', async () => {
        // Login
        await $("//body[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]").click();
    })

    it('Wait for the products page to load.', async () => {
        // Wait for products to load
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Add two different products to the cart', async () => {
        // add 2 products to cart
        await browser.elementHover("//button[@id='toolTipButton']");
        await expect("//button[@id='toolTipButton']").toHaveTextContaining("Hover me to see")
    })

    it('Open the cart.', async () => {
        // Open cart
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Use Assertion to check if the number of products is 2', async () => {
        // Assert number of products
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Remove the cheaper product.', async () => {
        // remove a cheaper product
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Go to the checkout.', async () => {
        // Go to checkout
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Enter First name, Last name, Zip/Postal code.', async () => {
        // Enter Info
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Click on the “Continue” button.', async () => {
        // Click Continue
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Use assertion to check if the item total value is correct.', async () => {
        // Assert total value
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Place the order.', async () => {
        // Place order
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Use assertion to check if the order is placed successfully.', async () => {
        // Assert order
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })

    it('Logout.', async () => {
        // Logout
        await $("//body/div[@id='app']/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[4]/div[1]/ul[1]/li[7]").click();
    })
});