//Writing a Login Flow Orange HRM Test Using Playwright and TypeScript
import { test, expect } from '@playwright/test';

const username = 'Admin';
const password = 'admin123';

test('Login Flow Orange HRM', async ({ page }) => {

    // Navigate to the Orange HRM Login Page
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // Verify the page title
    await expect (page).toHaveTitle('OrangeHRM');

    // Enter Username
    await page.locator('//input[@placeholder="Username"]').fill(username);
    // Enter Password
    await page.locator('//input[@placeholder="Password"]').fill(password);
    // Click on the Login Button
    await page.locator('.oxd-button').click();

    // Verify successful login by checking the presence of the Dashboard
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
})