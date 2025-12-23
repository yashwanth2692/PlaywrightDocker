//Writing a Login Flow Orange HRM Test Using Playwright and TypeScript
import { test, expect } from '@playwright/test';

const username = 'Admin';
const password = 'admin123';

const invalidUsername = 'InvalidUser';
const invalidPassword = 'InvalidPass';

test('Positive Scenario Login Flow Orange HRM', async ({ page }) => {

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

test('Negative Scenario Login Flow Orange HRM', async ({ page }) => {

    // NAvigate to the Orange HRM Login Page
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Verify the page title
    await expect (page).toHaveTitle('OrangeHRM');

    // Enter Invalid Username
    await page.locator('//input[@placeholder="Username"]').fill(invalidUsername);
    // Enter Invalid Password
    await page.locator('//input[@placeholder="Password"]').fill(invalidPassword);
    // Click on the Login Button
    await page.locator('.oxd-button').click();
    // Verify error message for invalid login
    await expect (page.locator('//div//div//i/following-sibling::p')).toHaveText('Invalid credentials');
})
