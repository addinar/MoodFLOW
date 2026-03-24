import { test, expect } from "@playwright/test";

// -- END TO END TEST
// Checks if when the user logs in, the application redirects to the dashboard

test("user can log in and gets redirected to dashboard", async ({ page }) => {
    await page.goto("http://localhost:3000/login"); // go to login page

    // suppose login request is successfull
    await page.route("**/identitytoolkit.googleapis.com/**", route => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({
                idToken: "fake-token",
                email: "test@test.com",
            }),
        });
    });
  
    // fill inputs
    await page.fill('input[type="email"]', "test@test.com");
    await page.fill('input[type="password"]', "password123");

    await page.click("text=Sign In"); // click login and trigger handleSubmit
  
    await expect(page).toHaveURL(/dashboard/); // check redirect success
});