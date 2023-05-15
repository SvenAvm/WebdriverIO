/*

1. Go to https://www.saucedemo.com/
2. Login with standard credentials
3. Wait for the products page to load
4. Add two different products to the cart
5. Open the cart
6. Use Assertion to check if the number of products is 2.
7. Remove the cheaper product
8. Go to the checkout
9. Enter First name, Last name, Zip/Postal code
10. Click on the “Continue” button
11. Use assertion to check if the item total value is correct
12. Place the order
13. Use assertion to check if the order is placed successfully
14. Logout

*/


describe("Test 3 (SauceDemo)", () => {
    it('Open SauceDemo', async () => {
        // Open URL
        await browser.url('https://www.saucedemo.com/');

        // Assert title
        await expect(browser).toHaveTitle("Swag Labs");
    })

    it('Login with standard credentials', async () => {
        // Login
        await $("#user-name").addValue('standard_user');
        await $("#password").addValue('secret_sauce');
        await $("#login-button").click();
    })

    it('Wait for the products page to load.', async () => {
        // Wait for products to load
        const item1 = $("#Sauce Labs Backpack");
        const item2 = $("#Sauce Labs Bike Light");
        const item3 = $("#Sauce Labs Bolt T-Shirt");
        const item4 = $("#Sauce Labs Fleece Jacket");
        const item5 = $("#Sauce Labs Onesie");
        const item6 = $("#Test.allTheThings() T-Shirt (Red)");


        //await $$(item1, item2, item3, item4, item5, item6).waitForDisplayed();

        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: 60 * 1000, // 60 seconds
                timeoutMsg: 'Message on failure'
            }
            );
    })

    it('Add two different products to the cart', async () => {
        // add 2 products to cart
        const product1AddToCart = $("#add-to-cart-sauce-labs-backpack");
        const product2AddToCart = $("#add-to-cart-sauce-labs-bike-light");

        await product1AddToCart.click();
        await product2AddToCart.click();
    })

    it('Open the cart.', async () => {
        // Open cart
        const cart = $("#shopping_cart_container");
        await cart.click();
    })

    it('Use Assertion to check if the number of products is 2', async () => {
        // Assert number of products
        const numberOfItems = $("#shopping_cart_badge");
        //await expect(numberOfItems).toHaveText​("2");
        expect(numberOfItems).toHaveValue("2");
    })

    it('Remove the cheaper product.', async () => {
        // remove a cheaper product
        const removeCheaper = $("#remove-sauce-labs-bike-light");

        await removeCheaper.click();
    })

    it('Go to the checkout.', async () => {
        // Go to checkout
        const checkout = $("#checkout");

        await checkout.click();
    })

    it('Enter First name, Last name, Zip/Postal code.', async () => {
        // Enter Info
        const firstName = $("#first-name");
        const lastName = $("#last-name");
        const postalCode = $("#postal-code");

        await firstName.addValue("John");
        await lastName.addValue("Doe");
        await postalCode.addValue("10040");
    })

    it('Click on the “Continue” button.', async () => {
        // Click Continue
        const continueBtn = $("#continue")

        await continueBtn.click();
    })

    it('Use assertion to check if the item total value is correct.', async () => {
        // Assert total value
        const actualTotalElement = $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[6]");

        await expect(actualTotalElement).toHaveTextContaining("Item total: $29.99")
    })

    it('Place the order.', async () => {
        // Place order
        const finishBtn = $("#finish");

        await finishBtn.click();
    })

    it('Use assertion to check if the order is placed successfully.', async () => {
        // Assert order
        const completeHeader = $("#checkout_complete_container");

        await expect(completeHeader).toHaveTextContaining("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    })

    it('Open Burger menu.', async () => {
        // Logout
        const burgerMenu = $("//button[@id='react-burger-menu-btn']");
        //const logoutBtn = $("//a[@id='logout_sidebar_link']");

        await burgerMenu.click();
        //await logoutBtn.click();
    })

    it('Logout.', async () => {
        // Logout
        //const burgerMenu = $("//button[@id='react-burger-menu-btn']");
        const logoutBtn = $('=Logout');

        //await burgerMenu.click();
        await logoutBtn.click();
    })
});