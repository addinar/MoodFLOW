import { test, expect } from "@playwright/test";

// -- END TO END TEST
// Checks if when the user logs in, the application redirects to the dashboard

test("user can log in and gets redirected to dashboard", async ({ page }) => {
    await page.goto("http://localhost:3000/login"); // go to login page

    // suppose login request is successfull
    await page.route('**/identitytoolkit.googleapis.com/**', async route => {
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                kind: "identitytoolkit#VerifyPasswordResponse",
                localId: "test-user-id",
                email: "test@test.com",
                displayName: "",
                idToken: "fake-token",
                registered: true,
                refreshToken: "fake-refresh",
                expiresIn: "3600"
            }),
        });
    });
  
    // fill inputs
    await page.fill('input[type="email"]', "test@test.com");
    await page.fill('input[type="password"]', "password123");
    await page.click("text=Sign In"); // click login and trigger handleSubmit
    
    await page.waitForTimeout(1000);
    await expect(page).toHaveURL(/dashboard/); // check redirect success
});