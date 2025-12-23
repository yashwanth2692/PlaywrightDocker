// Add Employee in PIM Module
import { test, expect } from '@playwright/test';

const randomSuffix = Date.now();
const username = `Admin`;

const password = 'admin123';
const url = 'https://opensource-demo.orangehrmlive.com/';

test('Add User in PIM Module Orange HRM', async ({ page }) => {
    // Navigate to the Orange HRM Login Page
    await page.goto(url);
    // Verify the page title
    await expect (page).toHaveTitle('OrangeHRM');
    // Enter Username
    await page.locator('//input[@placeholder="Username"]').fill(username);
    // Enter Password
    await page.locator('//input[@placeholder="Password"]').fill(password);
    // Click on the Login Button
    await page.locator('//button[@type="submit"]').click();
    // Verify successful login by checking the presence of the Dashboard
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();
    // Navigate to PIM Module
    await page.locator('//span[text()="PIM"]').click();
    // Click on Add Employee Button
    await page.locator('//button[text()=" Add "]').click();
    // Fill in Employee Details
    await page.locator('//input[@name="firstName"]').fill('Yashwanth');
    await page.locator('//input[@name="lastName"]').fill('Soma');
    // Save the New Employee
    await page.locator('//button[text()=" Save "]').click();
    // Verify that the Employee has been added by checking for Personal Details header
    // await expect(page.locator('//h6[text()="Personal Details"]')).toBeVisible();
    await page.getByRole('link', { name: 'Personal Details' }).waitFor();
});